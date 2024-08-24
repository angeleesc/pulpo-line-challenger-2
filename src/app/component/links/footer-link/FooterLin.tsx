import LinkTypeProps from '@/types/LinkTypes'
import Link from 'next/link'
import React from 'react'

export default function FooterLin({children, ...rest}: LinkTypeProps) {

    

  return (
    <li className='w-full'>
        <Link className='footer-link' {...rest}>{children}</Link>
    </li>
  )
}
