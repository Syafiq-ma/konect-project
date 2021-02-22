import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>konect</h1>
      <Link href='/profile'>
        <a>
          <button>go to demo</button>
        </a>
      </Link>
    </div>
  )
}
