import React from 'react'
import Navsecond from '../../components/NavSecond';

const StudentLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Navsecond/>
            <main>{children}</main>
        </body>
    </html>
  )
}

export default StudentLayout