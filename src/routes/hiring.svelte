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
Ingin menambahkan seseorang kedalam list? Clone repositori ini dan tambahkan
data baru di
<code>data/employer.js</code>
.
