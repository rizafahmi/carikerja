<script>
  import employers from "$src/data/employer.js";

  employers.sort((a, b) => {
    const nameA = a.name.replace(/\s/g, "").toUpperCase();
    const nameB = b.name.replace(/\s/g, "").toUpperCase();

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });
</script>

<svelte:head>
  <title>
    Untukmu yang terdampak, temukan beberapa perusahaan yang masih membuka
    lowongan
  </title>
</svelte:head>

<h1>
  Untukmu yang terdampak, temukan beberapa perusahaan yang masih membuka
  lowongan:
</h1>

<ul>
  {#each employers as employer}
    <li>
      <a href={employer.link} target="_blank" rel="noreferrer"
        >{employer.name}</a
      >
      <p>{employer.description}</p>
    </li>
  {:else}
    <li>data perusahaan belum tersedia</li>
  {/each}
</ul>

<hr />
<h4>Ingin perusahaanmu ada di daftar kami?</h4>
<p>
  <a
    href="https://github.com/rizafahmi/carikerja"
    target="_blank"
    rel="noreferrer"
  >
    Clone repositori ini
  </a>
  dan tambahkan data baru di
  <code>src/data/employer.js</code>
  . Bisa juga edit langsung via
  <a
    href="https://github.com/rizafahmi/carikerja/edit/main/src/data/employer.js"
    target="_blank"
    rel="noreferrer"
  >
    Github
  </a>
  .
</p>
