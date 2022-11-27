<script>
  import Nav from "$src/components/Nav.svelte";

  import "$src/app.css";
  import "terminal.css";
</script>

<main>
  <Nav />
  <slot />
  <hr />
  Dipersembahkan oleh<a
    href="https://deeptech.id"
    target="_blank"
    rel="noreferrer">DeepTech Foundation</a
  >. Kode sumber tersedia di<a
    href="https://github.com/rizafahmi/carikerja"
    target="_blank"
    rel="noreferrer">GitHub</a
  >.
</main>

<style>
  :global(body.dark-mode) main {
    color: #ffffff;
  }

  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
  @media (max-width: 480px) {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    main {
      padding: 0.5em;
    }
  }
</style>
