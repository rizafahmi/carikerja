<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<main>
  <Nav {segment} />
  <slot />
  <hr />
  Dipersembahkan oleh
  <a href="https://deeptech.id" target="_blank">DeepTech Foundation</a>
  . Kode sumber tersedia di
  <a href="https://github.com/rizafahmi/phkid" target="_blank">GitHub</a>
  .
</main>
