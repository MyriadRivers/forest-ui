<template>
    <div class="track">
        <table>
            <tr>
                <th scope="row"> {{ name }} </th>
                <td v-for="(beat, i) in totalBeats" :key="i"></td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
  name: 'Track',
  props: ['name', 'totalBeats']
}
</script>

<style>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
    table-layout: fixed;
    width: 100vw;
  }
  th {
      width: 100px;
  }
  td {
      width: 50px;
  }
</style>
