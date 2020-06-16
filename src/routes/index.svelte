<script>
  import people from "../data/people.js";

  const sortedPeople = people.sort((a, b) => a.name > b.name);
</script>

<style>
  .terminal-card {
    margin: 1em;
  }
  ul {
    margin-left: 1em;
  }
  li {
    margin-bottom: 0.5em;
  }
  .badge {
    margin-right: 0.5em;
    padding: 0.25em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    border-radius: 0.5em;
    margin-bottom: 0.25em;
    display: inline-block;
  }
  .react {
    background-color: #61dafb;
  }
  .react-native {
    background-color: #282c34;
    color: #61dafb;
  }
  .typescript {
    background-color: #027acc;
    color: #fff;
  }
  .devops {
    background-color: #f8981d;
  }
  .golang {
    background-color: #000;
    color: #fff;
  }
  .nodejs {
    background-color: #7ab361;
  }
  .php {
    background-color: #777bb3;
  }
  .hired {
    background-color: rgba(21, 21, 21, 0.75);
    z-index: 999;
    position: absolute;
    width: 89%;
    height: 10.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #D20862;
    font-size: 2em;
    font-weight: 870;
  }
</style>

<svelte:head>
  <title>Daftar engineer keren yang terkena dampak pemutusan hubungan kerja karena pandemi.</title>
</svelte:head>

<h4>Kata siapa cari software engineer yang berpengalaman itu susah?</h4>
<p>Sekarang, kami buat jadi mudah! Berikut adalah daftar engineer keren yang terkena dampak pemutusan hubungan kerja karena pandemi.</p>

<div>
  {#each sortedPeople as p}
    <div class="terminal-card">
      {#if p.hired}
        <div class="hired">
          HIRED!
        </div>
      {/if}
      <header>{p.name}</header>
      <ul>
        <li>⏲️ {p.status}</li>
        <li>💻 {p.role}</li>
        <li>📍 {p.location}</li>
        {#if p.tech_stack.length > 0}
          <li>
            ⚙️
            {#each p.tech_stack as tech}
              <span class="badge {tech}">{tech}</span>
            {/each}
          </li>
        {/if}
        <li>
          <span>🔗</span>
          <a href={p.social_media} target="_blank">Linkedin</a>
        </li>
      </ul>
    </div>
  {/each}
  <hr />

</div>
<div>
  <h4>Mau menambahkan seseorang?</h4>

  <a href="https://github.com/rizafahmi/carikerja" target="_blank">Clone repositori ini</a>
  dan tambahkan data baru di
  <code>src/data/people.js</code>. Bisa juga edit langsung melalui <a href="https://github.com/rizafahmi/carikerja/edit/master/src/data/people.js"
                                                                      target="_blank">Github</a>.
</div>
