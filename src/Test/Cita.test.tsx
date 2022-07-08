import { fireEvent, renderHook, screen, waitFor, render} from './test-utils';
import { setupServer } from "msw/node";
import Cita from '../features/cita/Cita';
import { generateHandlers } from '../mocks/cita.mock';

const { handlers,data } = generateHandlers();
export const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Cita", () => {
  
  it("Deberia quedar limpio el valor de Input", async () => {
    render(<Cita/>)
    fireEvent.click(screen.getByText("Borrar"));
      await waitFor(() => {
        const inputget = screen.getByTestId("input-get");
        expect(inputget).toBeEmptyDOMElement();
      });
    });      
    it("Deberia traernos una cita de un personaje aleatorio", async () => {
      const view = render()
      
      fireEvent.click(screen.getByText("Borrar"));
        await waitFor(() => {
          const inputget = screen.getByTestId("input-get");
          expect(inputget).toBeEmptyDOMElement();
        });
      });      
  
      
  });
