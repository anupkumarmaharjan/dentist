export const metadata = {
  title: 'Test page',
  description: 'Description page',
}
export default function Page({ params }) {
  // console.log( params );

  return (
    <main>
      <p>Post: {params.slug}</p>
      <p>Post: {metadata.description}</p>
      <div className='w-full'>
        <div className='w-8/12'>
          <h1 className='text-2xl'>Dentistry.se check</h1>
        </div>
      </div>
    </main>
  )
}
