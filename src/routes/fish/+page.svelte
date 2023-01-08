<script>
  
  import { fishArr } from './store.js';


	async function getGuides() {
		const res = await fetch(`https://www.fishwatch.gov/api/species`);
		const data = await res.json();
    console.log(data)
    const fData = data.map(item => {
      return item['Path']
    })
    fishArr.set(fData)

		if (res.ok) {
			return data;
		} else {
			throw new Error(data);
		}
	}

  let promise = getGuides();

  let finalFishArr;
	fishArr.subscribe(value => {
		finalFishArr = value;
	});

</script>



<div class="index">
  <h2>Guides2</h2>

  {#each finalFishArr as fish}
    <p>"{fish}","</p>
  {/each}

{#await promise}
	<p>...waiting</p>
{:then data}

{#if Array.isArray(data)}
  {#each data as guide}
  
  <p><strong>Species Name</strong>: {@html guide['Species Name']}</p>
  <p><strong>Color</strong>: {@html guide['Color']}</p>
  <p><strong>Taste</strong>: {@html guide['Taste']}</p>
  <p><strong>Texture</strong>: {@html guide['Texture']}</p>
  <p><strong>Quote</strong>: {@html guide['Quote']}</p>
  <p><strong>Health Benefits</strong>: {@html guide['Health Benefits']}</p>
  <p><strong>Location</strong>: {@html guide['Location']}</p>
  <p><strong>Physical Description</strong>: {@html guide['Physical Description']}</p>
  <p><strong>Source</strong>: {@html guide['Source']}</p>
  <hr />
  {/each}
{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

</div>

<style>
  .index {
    margin-left: 0px;
  }
  h2 {
    margin-top: 0;
  }
</style>
