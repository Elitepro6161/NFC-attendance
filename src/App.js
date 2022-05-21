import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './pages/login'

// student routes
import { StudentCalendar, StudentHome,StudentProfile } from './pages/student/index'

// faculty routes
import { Home, Profile, Recent } from './pages/faculty/index'

const App = () => {
  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />

          {/** Student Routes */}
          <Route path='/student' element={<StudentHome/>} />
          <Route path='/student/calendar' element={<StudentCalendar/>} />
          <Route path='/student/profile' element={<StudentProfile/>} />


          {/** Faculty Routes */}
          <Route path='/faculty' element={<Home/>} />
          <Route path='/faculty/recent' element={<Recent/>} />
          <Route path='/faculty/profile' element={<Profile/>} />
        </Routes>
      </Router>
    </>
  )
}




export default App