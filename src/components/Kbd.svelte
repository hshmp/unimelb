<script>
  let pressed = $state(false)
</script>

<kbd
  class:pressed
  on:mousedown={() => pressed = true}
  on:mouseup={() => pressed = false}
  on:mouseleave={() => pressed = false}
  role='button'
  tabindex='0'
  on:keydown={(e) => e.key === 'Enter' && (pressed = true)}
  on:keyup={() => pressed = false}
>
  <slot />
</kbd>

<style>
  kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.2em 0.55em;
    font-family: 'ui-monospace', 'Cascadia Code', monospace;
    font-size: 0.85em;
    font-weight: 600;
    color: var(--text-0);
    background: var(--bg-0);
    border: 1px solid var(--bg-1);
    border-bottom-width: 3px;
    border-radius: 6px;
    box-shadow:
      0 2px 0 var(--bg-1),
      inset 0 1px 0 var(--bg-1);
    cursor: pointer;
    user-select: none;
    transition:
      transform 80ms ease,
      box-shadow 80ms ease,
      border-bottom-width 80ms ease,
      background 80ms ease;
    position: relative;
  }

  kbd.pressed {
    border-bottom-width: 1px;
    box-shadow:
      0 1px 0 var(--bg-1),
      inset 0 1px 0 var(--bg-1);
    transform: translateY(2px);
  }
</style>