<template>

    <h2 class="titulo">Ticket do Cliente Aberto </h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Motivo</th>
      <th scope="col">Data</th>
      <th scope="col">Atendente </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Insatisfação</td>
      <td>14/08/2024</td>
      <td>Matheus</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Avaria</td>
      <td>03/10/2024</td>
      <td>Leonardo</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Compra Incorreta</td>
      <td>20/10/2024</td>
      <td>Leonardo</td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>
.titulo {
    text-align: center;
    margin-bottom: 20px;
}
.table>:not(caption)>*>* {
    padding: .5rem .5rem;
    border-bottom: 1px solid #ff7200;
    color: white;
    background-color: #ffffff00;;
    border-bottom-width: var(--bs-border-width);
    box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)));
}
</style>