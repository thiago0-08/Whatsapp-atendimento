<template>
  <div class="container-principal">
    <div class="container-fluid pt-4 px-4">
      <!-- Cards de Revenue -->
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        <div v-for="(item, index) in revenueData" :key="index" class="col">
          <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
            <i :class="item.icon" class="fs-2 text-white"></i>
            <div class="ms-3 text-white">
              <p class="mb-2">{{ item.title }}</p>
              <h6 class="mb-0">{{ item.value }}</h6>
            </div>
          </div>
        </div>
      </div>

      <!-- Gráficos -->
      <div class="row row-cols-1 row-cols-sm-2 g-4 mt-4">
        <div class="col">
          <div class="bg-secondary rounded p-4">
            <div class="d-flex justify-content-between mb-4">
              <h6 class="mb-0 text-white">Worldwide Sales</h6>
              <a href="#" class="text-warning">Show All</a>
            </div>
            <ChartComponent />
          </div>
        </div>
        <div class="col">
          <div class="bg-secondary rounded p-4">
            <div class="d-flex justify-content-between mb-4">
              <h6 class="mb-0 text-white">Sales by Region</h6>
              <a href="#" class="text-warning">Show All</a>
            </div>
            <PieCompomnent />
          </div>
        </div>
      </div>

      <!-- Vendas Recentes -->
      <div class="bg-secondary rounded p-4 mt-4">
        <div class="d-flex justify-content-between mb-4">
          <h6 class="mb-0 text-white">Recent Sales</h6>
          <a href="#" class="text-warning">Home</a>
        </div>
        <div class="table-responsive">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Customer</th>
                <th scope="col">Purchase Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Payment Alignment</th>
                <th scope="col">Attendant</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(sale, index) in salesData" :key="index">
                <td>{{ sale.startDate }}</td>
                <td>{{ sale.endDate }}</td>
                <td>{{ sale.customer }}</td>
                <td>{{ sale.amount }}</td>
                <td>
                  <select class="form-select form-select-dark">
                    <option v-for="(status, index) in sale.statusOptions" :key="index" :value="status">{{ status }}</option>
                  </select>
                </td>
                <td>
                  <select class="form-select form-select-dark">
                    <option v-for="(paymentOption, index) in sale.paymentOptions" :key="index" :value="paymentOption">{{ paymentOption }}</option>
                  </select>
                </td>
                <td>{{ sale.attendant }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 3 gráficos -->
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
        <div class="col">
          <div class="bg-secondary rounded p-4">
            <div class="d-flex justify-content-between mb-4">
              <h6 class="mb-0 text-white">Messages</h6>
              <a href="#" class="text-warning">Show All</a>
            </div>
            <DiaComponent />
            <div class="bootstrap-datetimepicker-widget usetwentyfour"></div>
          </div>
        </div>

        <div class="col">
          <div class="bg-secondary rounded p-4">
            <div class="d-flex justify-content-between mb-4">
              <h6 class="mb-0 text-white">Monthly Overview</h6>
              <a href="#" class="text-warning">Home</a>
            </div>
            <MesComponent />
            <div class="bootstrap-datetimepicker-widget usetwentyfour"></div>
          </div>
        </div>

        <div class="col">
          <div class="bg-secondary rounded p-4">
            <div class="d-flex justify-content-between mb-4">
              <h6 class="mb-0 text-white">Annual Trends</h6>
              <a href="#" class="text-warning">Show All</a>
            </div>
            <ChartComponent />
            <div class="bootstrap-datetimepicker-widget usetwentyfour"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MesComponent from '@/components/graficosComponents/MesComponent.vue';
import DiaComponent from '@/components/graficosComponents/DiaComponent.vue';
import ChartComponent from '@/components/graficosComponents/ChartComponent.vue';
import PieCompomnent from '@/components/graficosComponents/PieCompomnent.vue';

const revenueData = [
  { title: 'Total Revenue', value: '$1234', icon: 'bi bi-cash-coin' },
  { title: 'Page Views', value: '2.5K', icon: 'bi bi-eye-fill' },
  { title: 'Total Sales', value: '500', icon: 'bi bi-cart' },
  { title: 'New Messages', value: '15', icon: 'bi bi-chat-dots' },
];

const salesData = [
  {
    startDate: '01 Jan 2025',
    endDate: '31 Jan 2025',
    customer: 'John Doe',
    amount: '$123',
    statusOptions: ['In Progress', 'Completed', 'Pending'],
    paymentOptions: ['Warranty 30 days', 'Credit Exchange', 'Refund'],
    attendant: 'User1',
  },
  {
    startDate: '03 Jan 2025',
    endDate: '13 Jan 2025',
    customer: 'Doug Funnie',
    amount: '$90',
    statusOptions: ['In Progress', 'Completed', 'Pending'],
    paymentOptions: ['Warranty 30 days', 'Credit Exchange', 'Refund'],
    attendant: 'User2',
  },
];
</script>

<style scoped>
.container-principal {
  background-color: #0e1116;
  color: white;
  padding-left: 50px; /* Adiciona o espaçamento da borda esquerda */
}

.bg-secondary {
  background-color: #191c24 !important;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

.text-warning {
  color: #ff7200 !important;
}

.table-responsive {
  max-height: 300px;
  overflow-y: auto;
}

.table {
  color: #1050ff !important;
  border-collapse: collapse;
  width: 100%;
}

.table th,
.table td {
  border: 1px solid #333;
  text-align: center;
  padding: 10px;
}

.table th {
  background-color: #222;
  color: #ff7200;
}

.form-select-dark {
  background-color: #333;
  color: white;
  border: 1px solid #555;
  border-radius: 5px;
  padding: 5px;
}

.bg-secondary .fs-2 {
  color: #ff7200;
}
</style>
