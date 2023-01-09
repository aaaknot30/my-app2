<script>
  import { page } from '$app/stores';
</script>
<div>
  <h2>Oooops!</h2>
  <h3>You've reached a page that doesn't exist.</h3>
  <h4>Try again.</h4>
  <p>{$page.status}: {$page.error.message}</p>
</div>
