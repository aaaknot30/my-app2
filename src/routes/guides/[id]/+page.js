import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const id = params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const guide = await res.json()
  //console.log(guide)

  if (res.ok) {
    return {
      title: guide.title,
      body: guide.body
    }
  }
  throw error(404, 'Not found');
}
