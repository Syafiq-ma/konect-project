import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>
      <h1>konect</h1>
      <Link href='/profile'>
        <a>
          <button>go to demo</button>
        </a>
      </Link>
    </div>
  )
}
