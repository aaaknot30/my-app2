<script>
  import Title from '$lib/title.svelte'
  import '../styles/global.css'
</script>

<header>
  <Title title="JSON Svelte Project" />
</header>
<main>
  <div class="nav">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/guides">Guides</a>
    <a href="/guides2">Guides2</a>
    <a href="/fish">Fish</a>
    <a href="/newfish">NewFish</a>
  </div>
  <slot></slot>
</main>

<style>
  h1 {
    margin-top: 0;
  }
  main {
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    gap: 30px;
  }

  .nav {
    display: flex;
    flex-direction: column;
    width: 100px;
  }
</style>