<!-- Informações -->

<template>
  <div class="container-principal" >
  <div class="container-fluid pt-4 px-4">
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
            <i class="bi bi-cash-coin"></i>
            <div class="ms-3">
              <p class="mb-2">Total Revenue</p>
              <h6 class="mb-0">$1234</h6>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
            <i class="bi bi-eye-fill"></i>
            <div class="ms-3">
              <p class="mb-2">Total Revenue</p>
              <h6 class="mb-0">$1234</h6>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
            <i class="bi bi-cart"></i>
            <div class="ms-3">
              <p class="mb-2">Total Revenue</p>
              <h6 class="mb-0">$1234</h6>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
            <i class="bi bi-chat-dots"></i>

            <div class="ms-3">
              <p class="mb-2">Total Revenue</p>
              <h6 class="mb-0">$1234</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gráficos -->

  
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-6 col-md-6 mb-4">
          <div class="bg-secondary text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h6 class="mb-0">Worldwide Sales</h6>
              <a href="#" class="All" >Show All</a>
            </div>

            <div id="myCanvas">
              <ChartComponent />
            </div>

          </div>
        </div>
        <div class="col-sm-6 col-md-6 mb-4">
          <div class="bg-secondary text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h6 class="mb-0">Worldwide Sales</h6>
              <a href="#" class="All">Show All</a>
            </div>
            <div>
              <PieCompomnent />
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- vendas recentes -->
    <div class="bg-secondary text-center rounded p-4"  style="margin-left: 8%; margin-right: 8%;" >
      <div class="d-flex align-items-center justify-content-between mb-4" >
        <h6 class="mb-0">Atendimentos Recentes</h6>
        <a href="" class="All">Inicio</a>
      </div>
      <div class="table-responsive">
        <table class="table table-dark">
          <thead>
            <tr class="text-white">
              
              <th scope="col">Data Inicio</th>
              <th scope="col">Data Fim</th>
              <th scope="col">Cliente</th>
              <th scope="col">Valor Compra</th>
              <th scope="col">Status</th>
              <th scope="col">Alinhamento Pagamento</th>
              <th scope="col">Atendente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <div class="table">
              
              <td>01 Jan 2025</td>
              <td>31 Jan 2025</td>
              <td>Jhon Doe</td>
              <td>$123</td>
              <td>
                <select class="form-select-dark" aria-label="Default select example">
                  <option selected>Selecione um Status</option>
                  <option value="1">Em tratativa</option>
                  <option value="2">Finalizado</option>
                  <option value="3">Aguardando Atendimento</option>
                </select>
              </td>
              <td><select class="form-select-dark" aria-label="Default select example">
                  <option selected>Alinhamento Pagamento</option>
                  <option value="1">Garantia 30 dias</option>
                  <option value="2">Troca Crédito</option>
                  <option value="3">Troca Estorno</option>
                  <option value="3">Troca Padrão</option>
                  <option value="3">Pagamento Devolvido</option>
                  <option value="3">Reversa</option>
                </select>
               </td>
              <td>Usuario</td>
              </div>
            </tr>
            <tr>
              <div class="table">
           
              <td>03 Jan 2025</td>
              <td>13 Jan 2025</td>
              <td>doug funnie</td>
              <td>$90</td>
              <td>
                <select class="form-select-dark" aria-label="Default select example">
                  <option selected>Selecione um Status</option>
                  <option value="1">Em tratativa</option>
                  <option value="2">Finalizado</option>
                  <option value="3">Aguardando Atendimento</option>
                </select>
              </td>
              <td><select class="form-select-dark" aria-label="Default select example">
                  <option selected>Alinhamento Pagamento</option>
                  <option value="1">Garantia 30 dias</option>
                  <option value="2">Troca Crédito</option>
                  <option value="3">Troca Estorno</option>
                  <option value="3">Troca Padrão</option>
                  <option value="3">Pagamento Devolvido</option>
                  <option value="3">Reversa</option>
                </select>
               </td>
              <td>Usuario</td>
              </div>
            </tr>
            
            
          </tbody>
        </table>
      </div>
    </div>
    <!-- 3 graficos  -->

    <div class="container text-center" style="margin-top: 15px;">
      <div class="row">

        <div class="col">
          <div class="h-100 bg-secondary rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h6 class="mb-0">Mensagem</h6>
              <a href="" class="All">Show All</a>
            </div>
            <div id="myCanvas">
              <DiaComponent />
            </div>
            <div id="calendario">
              <div class="bootstrap-datetimepicker-widget usetwentyfour">
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="h-100 bg-secondary rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h6 class="mb-0">Mensagem</h6>
              <a href="" class="All">Inicio</a>
            </div>
            <div id="myCanvas">
              <MesComponent />
            </div>
            <div id="calendario">
              <div class="bootstrap-datetimepicker-widget usetwentyfour">
              </div>
            </div>
          </div>
        </div>
        
        <div class="col">
          <div class="h-100 bg-secondary rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h6 class="mb-0">Mensagem</h6>
              <a href="" class="All">Show All</a>
            </div>
            <div id="myCanvas">
              <ChartComponent />
            </div>
            <div id="calendario">
              <div class="bootstrap-datetimepicker-widget usetwentyfour">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  </div> <!-- div container -->
</template>


<script setup>
import MesComponent from '@/components/graficosComponents/MesComponent.vue';
import DiaComponent from '@/components/graficosComponents/DiaComponent.vue';
import ChartComponent from '@/components/graficosComponents/ChartComponent.vue';
import PieCompomnent from '@/components/graficosComponents/PieCompomnent.vue';
</script>

<style scoped>
 
.container-principal {
  background-color: rgb(0, 0, 0) !important;
  color: white;

}


.All{
  color: #ff7200;
}

.btn-primary{
  background-color: #ff7200 ;
  border: #ff7200;
}

.bi-cash-stack{
  color: white !important;
}

.row{
  margin-top: 45px;
  
}

.aaa{
  color:#ff7200 !important;
}

.bg-body-tertiary {
  color: #191C24;
}

.card-body {
  height: 300px;
}

.bg-secondary {
  background-color: #191C24 !important; /* cor de fundo dos card */
}

.text-center {
  text-align: center;
  padding: 20px;
}


.mb-4 {
  margin-bottom: 1.5rem;
  color: #ff7200;
}

.p-4 {
  padding: 1.5rem;
  
}

.table-responsive {
  background-color: transparent !important;
  padding: 0.5 rem;
  margin-bottom: 1.5rem;
  height: 300px;
  
}
.table{
  color: #1050ff !important;
}

/* check box */
.border-bottom {
  border-bottom: 1px solid #ddd; /* cor da linha */
  padding-bottom: 8px;
  margin-bottom: 8px;
}

.form-check-label {
  color: #ff7200;
}
</style>
