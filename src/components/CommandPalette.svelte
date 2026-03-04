<script>
  //
</script>

<div class="command-palette">
  <input type="search" name="cmd" id="cmd">
  <div class="results"></div>
</div>

<style>
  .command-palette {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    background-color: var(--background-0);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    padding: 1rem;
    z-index: 1000;
  }
</style>