import { fishQuery } from './store.js';
import { fishProfile } from './store.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch('https://www.fishwatch.gov/api/species')
  const fish = await res.json()
  //console.log(fish)
  const fData = fish.map(item => {
    return item
  })
  fishQuery.set(fData)

  const fProfile = fish.map(item2 => {
    //console.log(item2.Path.slice(10))
    return item2.Path.slice(10)
  })
  fishProfile.set(fProfile)

  if (res.ok) {
    return {
      fish
    }
  }

  return {
    status: res.status,
    error: new Error('Could not fetch the guides')
  }
}