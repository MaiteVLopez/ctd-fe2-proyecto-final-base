/**@jest-environment-jsdom**/
import { screen, waitFor, render } from './test-utils';
import { setupServer } from "msw/node";
import Cita from '../features/quote/Cita';
import { generateHandlers } from '../mocks/cita.mock';
import userEvent from '@testing-library/user-event';
import { NO_ENCONTRADO, NOMBRE_INVALIDO, MENSAJE_CARGANDO } from '../features/quote/constants';

const { handlers, data } = generateHandlers();
export const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe("Cuando presionamos el Boton Borrar", () => {
  it("Deberia quedar limpio el valor del Input", async () => {
    render(<Cita />)
    userEvent.click(screen.getByText("Borrar"));
    await waitFor(() => {
      const inputget = screen.getByPlaceholderText("Ingresa el nombre del autor");
      expect(inputget).toBeEmptyDOMElement();
    });
  });
  it("Deberia mostrarse el estado inicial", async () => {
    render(<Cita />)
    userEvent.click(screen.getByText("Borrar"));
    await waitFor(() => {
      const p_cita = screen.getByPlaceholderText('Cita');
      expect(p_cita).toHaveTextContent(NO_ENCONTRADO);
    });
  });
});

describe("Cuando el usuario cambia el Input", () => {
  it("Si el input esta vacio, el boton deberia decir Obtener cita aleatoria", async () => {
    render(<Cita />)

    const inputget = screen.getByPlaceholderText("Ingresa el nombre del autor");
    await waitFor(() => {
      const button_cita = screen.getByPlaceholderText("Citar");
      expect(button_cita).toHaveTextContent("Obtener cita aleatoria");
    });
  });
  it("Si el input tiene datos, el boton deberia decir Obtener cita", async () => {
    render(<Cita />)
    const inputget = screen.getByPlaceholderText("Ingresa el nombre del autor");
    userEvent.type(inputget, "Homer");
    const button_cita = screen.getByPlaceholderText("Citar");
    await waitFor(() => {
      expect(button_cita).toHaveTextContent("Obtener Cita");

    });
  });
});
describe("Cuando presionamos el boton <Obtener Cita / Obtener Cita Aleatoria>", () => {
  describe("Si el usuario ingresa un numero", () => {
    it("Deberia mostrarse el estado de error", async () => {
      render(<Cita />)
      const inputget = screen.getByPlaceholderText("Ingresa el nombre del autor");
      userEvent.type(inputget, "24");
      const button_cita = await screen.findByText("Obtener Cita");
      userEvent.click(button_cita);
      await waitFor(() => {
        const p_cita = screen.getByPlaceholderText('Cita');
        expect(p_cita).toHaveTextContent(NOMBRE_INVALIDO);
      });

    });
  });
  describe("Si el usuario ingresa un texto que no es un personaje", () => {
    it("Deberia mostrarnos el estado no encontrado", async () => {
      render(<Cita />)
      const inputget = screen.getByPlaceholderText("Ingresa el nombre del autor");
      await userEvent.type(inputget, "Maite Lopez");
      const button_cita = await screen.findByText("Obtener Cita");
      userEvent.click(button_cita);
      await screen.findByText(MENSAJE_CARGANDO);
      await waitFor(async () => {
        const p_cita = screen.getByPlaceholderText('Cita');
        expect(p_cita).toHaveTextContent(NO_ENCONTRADO);
      });
    });
  });

  describe("Si el usuario ingresa un personaje valido", () => {
    it("Deberia mostrarnos el estado cargando", async () => {
      render(<Cita />)
      const inputget = screen.getByPlaceholderText("Ingresa el nombre del autor");
      userEvent.type(inputget, "Apu");
      const button_cita = await screen.findByText("Obtener Cita");
      userEvent.click(button_cita);
      await waitFor(() => {
        const p_cita = screen.getByPlaceholderText("Cita");
        expect(p_cita).toHaveTextContent(MENSAJE_CARGANDO);
      });
    });
    it("Deberia mostrarnos la cita de el personaje", async () => {
      render(<Cita />)
      const inputget = screen.getByPlaceholderText("Ingresa el nombre del autor");
      await userEvent.type(inputget, "Apu");
      const button_cita = await screen.findByText("Obtener Cita");
      userEvent.click(button_cita);
      await waitFor(() => {
        const p_cita = screen.getByTestId('Cita');
        expect(p_cita).toHaveTextContent(data.quote);
      });

    });

    it("Deberia mostrarnos el personaje de la cita", async () => {
      render(<Cita />)
      const inputget = screen.getByPlaceholderText("Ingresa el nombre del autor");
      await userEvent.type(inputget, "Apu");
      const button_cita = await screen.findByText("Obtener Cita");
      userEvent.click(button_cita);
      await screen.findByText(MENSAJE_CARGANDO);
      await waitFor(async () => {
        const p_cita = await screen.findByPlaceholderText("Personaje");
        expect(p_cita).toHaveTextContent(data.character);
      });
    });

  });

});

