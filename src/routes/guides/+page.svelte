<script>
  /** @type {import('./$types').PageData} */
  export let data;
  
</script>

<div class="index">
  <h2>Guides</h2>
  {#each data.guides as guide}
  <p>
    <a href={`/guides/${guide.id}`}>{guide.title}</a>
  </p>
{/each}
</div>



<style>
  .index {
    margin-left: 0px;
  }
  h2 {
    margin-top: 0;
  }
</style>
