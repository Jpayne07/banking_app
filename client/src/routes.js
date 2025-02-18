import React from 'react'
import App from './App'
import Login from './Pages/Login'
import Home from './Pages/Home'
import TransactionsIndex from './Pages/TransactionsIndex'
import TransactionId from './Pages/Transaction_id'
import Signup from './Pages/Signup'
import Accountsv2 from './Pages/Accountsv2'
import Insights from './Pages/Insights'
import AddNewAccount from './Pages/AddNewAccount'


const routes = [
      {
        path: '/',
        element: <App />,
        children: [
              {
              path:"/",
              element: <Home />
            }, 
            {
              path:'/login',
              element: <Login />
            },
            {
              path:'/accounts',
              element: <Accountsv2 />
            }, 
            {
              path:'/account/:id',
              element: <TransactionsIndex />
            }, 
            {
              path:'/transactions/:id',
              element: <TransactionId />
            }
            , 
          
            {
              path:'/insights',
              element: <Insights />
            }, 
          
            {
              path:'/add_account',
              element: <AddNewAccount />
            }
        ]
    }, 
    {
      path:'/signup',
      element: <Signup />
    }
]
 
export default routes