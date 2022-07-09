/**@jest-environment-jsdom**/
import { fireEvent, screen, waitFor, render} from './test-utils';
import { setupServer } from "msw/node";
import Cita from '../features/quote/Cita';
import { generateHandlers } from '../mocks/cita.mock';
import  userEvent  from '@testing-library/user-event';
import { NO_ENCONTRADO,NOMBRE_INVALIDO, } from '../features/quote/constants';

const { handlersQuote,data} = generateHandlers();

export const server = setupServer(...handlersQuote);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

/*

export const MENSAJE_CARGANDO = "CARGANDO...";
export const NOMBRE_INVALIDO = "Por favor ingrese un nombre válido";
export const NO_ENCONTRADO = "No se encontro ninguna cita";

*/

describe("Cuando presionamos el Boton Borrar", () => {

  it("Deberia quedar limpio el valor de Input", async () => {
    render(<Cita/>)
    fireEvent.click(screen.getByText("Borrar"));
      await waitFor(() => {
        const inputget = screen.getByPlaceholderText("Ingresa el nombre del autor");
        expect(inputget).toBeEmptyDOMElement();
      });
    });
    it("La cita deberia tener el estado inicial", async () => {
      render(<Cita/>)
      fireEvent.click(screen.getByText("Borrar"));
        await waitFor(() => {
          const p_cita = screen.getByTestId('Cita');
          expect(p_cita).toHaveTextContent(NO_ENCONTRADO);
        });
      });
});

describe("Cuando presionamos el Obtener Cita / Obtener Cita Aleatoria", () => {
  describe("Si el usuario ingresa un numero", () => {
    it("La cita deberia quedar en estado de error", async () => {
      render(<Cita/>)
      const inputget = screen.getByPlaceholderText("Ingresa el nombre del autor");
      userEvent.type(inputget,"24");
      const button_cita = await  screen.findByText("Obtener Cita");
      userEvent.click(button_cita);    
        await waitFor(() => {
          const p_cita = screen.getByTestId('Cita');
          expect(p_cita).toHaveTextContent(NOMBRE_INVALIDO);    
        });
       
      });  
  });


  describe("Si el usuario ingresa un personaje valido", () => {
    it("Deberia mostrarnos la cita", async () => {
      render(<Cita/>)
      const inputget = screen.getByPlaceholderText("Ingresa el nombre del autor");
      userEvent.type(inputget,"Ap");
      const button_cita = await  screen.findByText("Obtener Cita");
     
      userEvent.click(button_cita);    
        await waitFor(() => {
          const p_cita = screen.getByTestId('Cita');
          expect(p_cita).toHaveTextContent(data.cita);    
        });
       
      });  
  });  

});

