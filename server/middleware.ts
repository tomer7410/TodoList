import { RequestHandler, ErrorRequestHandler } from "express";
export const auth: RequestHandler = (req, res, next) => {
    if (req.session.userId) {
      return next();
    }
  
    res.status(401).json({ message: "Unauthorized" });
  };
  
  export const guest: RequestHandler = (req, res, next) => {
    console.log("in guess");
    
    if (req.session.userId) {
      console.log("forbidden");
      
      return res.status(403).json({ message: "Forbidden" });
    }
  
    next();
  };
  export const notFound: RequestHandler = (req, res, next) => {
    res.status(404).json({ message: "Not Found" });
  };
  
export const serverError: ErrorRequestHandler = (err, req, res, next) => {
// Handle "SyntaxError: Unexpected end of JSON input"
if (err instanceof SyntaxError) {
    return res.status(400).json({ message: "Bad Request" });
}

console.error(err);
res.status(500).json({ message: "Server Error" });
};

const whitelist = new Set(["http://localhost:3000"]);
// export const corsOptions = {
//   optionsSuccessStatus: 200,
//   origin: (origin:any, callback:any)=> {
//     console.log(origin)
//     if (whitelist.has(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true
// };



export const corsOptions = {
  optionsSuccessStatus: 200,
  origin:"*",
  credentials: true
};

  