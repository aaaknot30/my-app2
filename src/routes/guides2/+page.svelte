<script>
  
	async function getGuides() {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
		const data = await res.json();
		if (res.ok) {
			return data;
		} else {
			throw new Error(data);
		}
	}

  let promise = getGuides();


</script>

<div class="index">
  <h2>Guides2</h2>



{#await promise}
	<p>...waiting</p>
{:then data}

{#if Array.isArray(data)}
  {#each data as guide}
  <p><a href="/">{guide.title}</a></p>
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
