import './App.css';

function App() {
  return (
    <div className="App">
      <form action="">
        <fieldset>
          <legend>My React Form</legend>

          <label htmlFor="name">
            Nome
            <input type="text" id="name" required/>
          </label>

          <label htmlFor="email">
            Email
            <input type="email" id="email" required/>
          </label>

          <label htmlFor="cpf">
            CPF
            <input type="text" id="cpf" required/>
          </label>

          <label htmlFor="endereco">
            Endereço
            <input type="text" id="endereco" required/>
          </label>

          <label htmlFor="cidade">
            Cidade
            <input type="text" id="cidade" required/>
          </label>

          <label htmlFor="estado">
            Estado
            <select id="estado" required>
              <option value="SP">SP</option>
              <option value="ES">ES</option>
              <option value="MG">MG</option>
              <option value="RJ">RJ</option>
              <option value="PR">PR</option>
              <option value="RS">RS</option>
              <option value="SC">SC</option>
            </select>
          </label>

          <label>
            Tipo
            <hr />
            <label htmlFor="casa">
              Casa
              <input name='tipo' type="radio" id="casa" value={'casa'} />
            </label>
            <label htmlFor="apartamento">
              Apartamento
              <input name='tipo' type="radio" id="apartamento" value={'apartamento'} />
            </label>
          </label>

        </fieldset>
      </form>
      
    </div>
  );
}

export default App;
