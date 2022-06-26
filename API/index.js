// ==================== //
// ===== IMPORTS ====== //
// ==================== //

const express = require('express');
const { QuickDB } = require("quick.db");
const cors = require('cors')
var bodyParser = require('body-parser')

// ===================== //
// == INITIALIZATIONS == //
// ===================== //

const db = new QuickDB();
var app = express()

// ===================== //
// ====== MODULES ====== //
// ===================== //

app.use(cors())
app.use(bodyParser.json());

// ===================== //
// ====== ROUTES ======= //
// ===================== //

app.get('/', cors(), async (req, res) => {
  if (!(await db.get('names'))){
    console.log(`Reset detected`)
    db.set('names', [])
  }
  res.send('Api Endpoint for vortex technologies authentication')
});

// ====== PRODUCTS ======= //

app.get('/pro', cors(), async (req, res) => {
  await db.set('products', [
    {
      name: 'Cyclone 525',
      price: '799',
      desc: 'OP RGB MOUSE'
    },
    {
      name: 'Cyclone 777',
      price: '1299',
      desc: 'RGB MOUSE, Glides faster than a glider. Change color from desktop app'
    }
  ])
  const o = {
    products: await db.get('products')
  }
  return res.send(JSON.stringify(o))
});

// ====== CART ======= //

app.get('/cart/:token', cors(), async (req, res) => {
  const token = req.params.token
  const u = await db.get(`t_${token}.cart`)
  const e = {
    error: {
      status: false,
      code: 200,
      message: "Cart"
    },
    body: {
      request: "cart",
      content: u
    }
  }
  res.send(JSON.stringify(e))
})

app.post('/addcart/:token', cors(), async (req, res) => {
  const item = req.body.item
  const u = await db.push(`t_${token}.cart`, item)
  const e = {
    error: {
      status: false,
      code: 200,
      message: "Cart"
    },
    body: {
      request: "cart",
      content: u
    }
  }
  res.send(JSON.stringify(e))
})

// ====== TOKENS ======= //

app.post('/reg', cors(), async (req, res) => {
  const c = req.body
  const mail = c.mail
  const pass = c.pass
  const username = c.username
  const name = c.name
  const content = {
    mail: mail,
    pass: pass,
    info: {
      username: username,
      name: name,
      bal: 420.69
    },
    cart: []
  }

  const names = await db.get('names')

  if (names.includes(username)) {
    const o = {
      error: {
        status: true,
        code: 200,
        message: "Username Taken"
      },
      body: {
        request: "token",
        content: null
      }
    }
    return res.send(JSON.stringify(o))
  }
  if (await db.get(`u_${mail}`)) {
    const o = {
      error: {
        status: true,
        code: 200,
        message: "Email Already Registered"
      },
      body: {
        request: "token",
        content: null
      }
    }
    return res.send(JSON.stringify(o))
  }
  await db.set(`u_${mail}`, content)


  const token = (Math.random() + 1).toString(36).substring(7);

  await db.set(`t_${token}`, content)
  await db.push(`names`, name)

  const o = {
    error: {
      status: false,
      code: 200,
      message: "Registered"
    },
    body: {
      request: "token",
      content: token
    }
  }
  res.send(JSON.stringify(o))
})

app.post('/login', cors(), async (req, res) => {
  const c = req.body
  const u = await db.get(`u_${c.mail}`)
  if (u && u.pass == c.pass) {
    const token = (Math.random() + 1).toString(36).substring(7);
    await db.set(`t_${token}`, u)
    const e = {
      error: {
        status: false,
        code: 200,
        message: "Authenticated"
      },
      body: {
        request: "token",
        content: token
      }
    }
    return res.send(JSON.stringify(e))
  } else {
    const e = {
      error: {
        status: true,
        code: 401,
        message: "Invalid Credentials"
      },
      body: {
        request: 'token',
        content: null
      }
    }
    return res.send(JSON.stringify(e))
  }
})

app.post('/logout', cors(), async (req, res) => {
  const c = req.body
  const token = c.token
  await db.delete(`t_${token}`)
  const e = {
    error: {
      status: false,
      code: 200,
      message: "Deleted Token"
    },
    body: {
      request: "delete",
      content: token
    }
  }
  res.send(JSON.stringify(e))
})

// ====== USERINFO ======= //

app.post('/addcoins', cors(), async (req, res) => {
  const c = req.body
  const val = c.value
  const token = c.token
  const u = await db.get(`t_${token}`)
  await db.push(`u_${u.mail}.info.bal`, parseInt(val))
  const e = {
    error: {
      status: false,
      code: 200,
      message: "Added"
    },
    body: {
      request: "addedbal",
      content: await db.get(`u_${u.mail}.info.bal`)
    }
  }
  res.send(JSON.stringify(e))
})

app.get('/userinfo/:token', cors(), async (req, res) => {
  const token = req.params.token
  const u = await db.get(`t_${token}`)
  const e = {
    error: {
      status: false,
      code: 200,
      message: "Userinfo"
    },
    body: {
      request: "userinfo",
      content: u
    }
  }
  res.send(JSON.stringify(e))
})

// ==================== //
// ====== START ======= //
// ==================== //

app.listen(3000, () => {
  console.log('server started');
});
