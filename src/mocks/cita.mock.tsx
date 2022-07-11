import { rest } from "msw";
import { API_URL } from "../app/constants";
export const generateHandlers = () => {
  const data=
    {
     "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
     "character": "Nelson Muntz",
     "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
     "characterDirection" : "Left"
    },
    dataerror: never[] = [],
    handlers = [
      rest.get(API_URL, (req, res, ctx) => {
        if (req.url.searchParams.get("character") === 'Nel') {
          return res(ctx.status(200),
            ctx.json(
              [
                data
              ],
            )
          );
        }
        else if (req.url.searchParams.get("character") === 'Mraite Lopez') {
          return res(ctx.status(200),
            ctx.json(
              [
              dataerror
              ],
            )
          );
        }
        else {
          return res(ctx.status(200),
            ctx.json(
              [
              data
              ],
            )
          );
        }
      }),
    ]
  return { handlers, data };
};

