import Link from 'next/link'

const Index = () => (
    <div>
        <Link href="/about">
            <button>Go to About Page</button>
        </Link>
        <Link href='/about'>
            <a style={{ fontSize: 20 }}>about page</a>
        </Link>
      <p>Hello Next.js</p>
    </div>
  )
  
  export default Index