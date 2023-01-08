<script>

import { fishQuery } from './store.js';
import { fishProfile } from './store.js';

let finalFishArr;
fishQuery.subscribe(value => {
		finalFishArr = value;
	});

  let finalFishProfile;
  fishProfile.subscribe(value => {
    finalFishProfile = value;
      });

  /** @type {import('./$types').PageData} */
  export let data;
  console.log(data)

let selected
let mainFish = ""
function loadFish (value) {
  const name = `/profiles/${selected}`
  const fish = finalFishArr.filter(item => {
    if (item.Path == name) {
      console.log(item.Path)
      console.log("selected", selected)
      mainFish = item
      return item
    }
  })
  console.log(fish)
}



</script>

<div class="index">
  <h2>NewFish</h2>

{#if mainFish}
<h1>{mainFish['Species Name']}</h1>
{/if}

{#if mainFish['Color']}
  <p><strong>Color</strong>: {@html mainFish['Color']}</p>
{/if}

{#if mainFish['Taste']}
<p><strong>Taste</strong>: {@html mainFish['Taste']}</p>
{/if}

{#if mainFish['Texture']}
<p><strong>Texture</strong>: {@html mainFish['Texture']}</p>
{/if}

{#if mainFish['Quote']}
<p><strong>Quote</strong>: {@html mainFish['Quote']}</p>
{/if}

{#if mainFish['Health Benefits']}
<p><strong>Health Benefits</strong>: {@html mainFish['Health Benefits']}</p>
{/if}

{#if mainFish['Location']}
<p><strong>Location</strong>: {@html mainFish['Location']}</p>
{/if}

{#if mainFish['Physical Description']}
<p><strong>Physical Description</strong>: {@html mainFish['Physical Description']}</p>
{/if}

{#if mainFish['Source']}
<p><strong>Source</strong>: {@html mainFish['Source']}</p>
{/if}

{#if mainFish['Image Gallery'] && mainFish['Image Gallery'].src}
<img width="200px" src="{mainFish['Image Gallery'].src}" alt="" />
{/if}
{#if mainFish['Image Gallery'] && mainFish['Image Gallery'][0]}
<img width="200px" src="{mainFish['Image Gallery'][0].src}" alt="" />
{/if}
{#if mainFish['Image Gallery'] && mainFish['Image Gallery'][1]}
<img width="200px" src="{mainFish['Image Gallery'][1].src}" alt="" />
{/if}
{#if mainFish['Image Gallery'] && mainFish['Image Gallery'][2]}
<img width="200px" src="{mainFish['Image Gallery'][2].src}" alt="" />
{/if}
{#if mainFish['Image Gallery'] && mainFish['Image Gallery'][3]}
<img width="200px" src="{mainFish['Image Gallery'][3].src}" alt="" />
{/if}
{#if mainFish['Image Gallery'] && mainFish['Image Gallery'][4]}
<img width="200px" src="{mainFish['Image Gallery'][4].src}" alt="" />
{/if}


  <!-- {#each data.fish as fish}
  <p>
    <a href="/">{fish.Calories}</a>
  </p>
{/each} -->
<hr />
{#each finalFishArr as fish}
{fish['Species Name']}
{/each}
<hr />
<!-- {#each finalFishProfile as fish2}
{fish2}
{/each} -->



<form>
	<select bind:value={selected} on:change="{loadFish}">
		{#each finalFishProfile as fish2}
			<option value={fish2}>
				{fish2}
			</option>
		{/each}
	</select>
  </form>



</div>
<style>
  .index {
    margin-left: 0px;
  }
  h2 {
    margin-top: 0;
  }
</style>
