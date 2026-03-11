<script>
import { page } from '$app/stores'
import Kbd from '../components/Kbd.svelte'
</script>

<main>
  <h1>{$page.status}</h1>
  <p>{$page.error?.message}</p>
  <p>Press the <Kbd>/</Kbd> key to go <a href="/">HOME</a> or the <Kbd>←</Kbd> key to go back!</p>
</main>