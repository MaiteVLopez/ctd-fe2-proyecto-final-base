import { rest } from "msw";
import { API_URL } from "../app/constants";
export const generateHandlers = () => {
  const  data = {
    character: 'Apu Nahasapeemapetilon',
    quote: 'Thank you. Come again.',
    image:'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629',
    characterDirection:'Left'},
 
    handlers = [
      rest.get(API_URL, (req, res, ctx) => {
        if (req.url.searchParams.get("character") === 'Ap') {
          return res(
                     ctx.json({
                    results: data,
                    })
          );
        }

        return res(
          ctx.status(200),
          ctx.json({
            results: data,
          })
        );
      }),
    ],

  handlersQuote = [
    rest.get(API_URL, (req, res, ctx) => {
      return res(ctx.status(200),
                ctx.json({
                results: data,
                })
            );
        }),    
    ];

  return { handlers,handlersQuote,data };
};

 /*const data = Array.from({ length: 10 })
    .fill(null)
    .map(() => ({
      character: 'Apu Nahasapeemapetilon',
      quote: 'Thank you. Come again.',
      image:'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629',
      characterDirection:'Left'
    })),*/