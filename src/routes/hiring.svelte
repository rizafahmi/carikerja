<script>
  import employers from '../data/employer.js';
</script>

<svelte:head>
  <title>Daftar perusahaan yang masih hiring</title>
</svelte:head>

<h1>Perusahaan yang masih hiring</h1>

<ul>
  {#each employers as employer}
    <li>{employer.name}</li>
  {:else}
    <li>data perusahaan belum tersedia</li>
  {/each}
</ul>

<hr />
<p>
  Ingin menambahkan perusahaan yang masih melakukan perekrutan atau hiring
  kedalam list?
  <a href="https://github.com/rizafahmi/phkid" target="_blank">
    Clone repositori ini
  </a>
  dan tambahkan data baru di
  <code>src/data/employer.js</code>
  .
</p>
