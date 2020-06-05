<script>
  import employers from '../data/employer.js';
</script>

<svelte:head>
  <title>Untukmu yang terdampak, temukan beberapa perusahaan yang masih membuka lowongan</title>
</svelte:head>

<h1>Untukmu yang terdampak, temukan beberapa perusahaan yang masih membuka lowongan:
</h1>

<ul>
  {#each employers as employer}
    <li>
      <a href={employer.link} target="_blank">{employer.name}</a>
    </li>
  {:else}
    <li>data perusahaan belum tersedia</li>
  {/each}
</ul>

<hr />
<h4>Ingin perusahaanmu ada di daftar kami?</h4>
<p>
  <a href="https://github.com/rizafahmi/carikerja" target="_blank">Clone repositori ini</a> dan tambahkan data baru di <code>src/data/employer.js</code>. Bisa juga edit langsung via <a href="https://github.com/rizafahmi/carikerja/edit/master/src/data/employer.js" target="_blank">Github</a>.
</p>
