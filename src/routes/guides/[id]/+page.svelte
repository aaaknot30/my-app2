<script>

  /** @type {import('./$types').PageData} */
  export let data;
//console.log(data)

</script>

<div>

<h1>{data.title}</h1>
<div>{@html data.body}</div>

  <!-- <h2>{singleGuide.title}</h2>
  <p>{singleGuide.body}</p> -->
</div>

<style>

</style>