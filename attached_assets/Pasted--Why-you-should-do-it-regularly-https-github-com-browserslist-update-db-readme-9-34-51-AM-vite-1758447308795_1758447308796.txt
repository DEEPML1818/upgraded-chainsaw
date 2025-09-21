  Why you should do it regularly: https://github.com/browserslist/update-db#readme
9:34:51 AM [vite] hmr update /src/pages/business-solutions.tsx, /src/index.css?v=Yfg6umz2nXAeHU241NJnw
9:34:53 AM [vite] Internal server error: /home/runner/workspace/client/src/pages/business-solutions.tsx: Unexpected token (290:1)

  288 |           </div>
  289 |         );
> 290 | </new_str>
      |  ^
  291 | </changes>
  292 |
  293 | const TopologyDiagram = ({ solutionId }: { solutionId: string }) => {
  Plugin: vite:react-babel
  File: /home/runner/workspace/client/src/pages/business-solutions.tsx:290:1
  288|            </div>
  289|          );
  290|  </new_str>
     |   ^
  291|  </changes>
  292|  
      at toParseError (/home/runner/workspace/node_modules/@babel/parser/src/parse-error.ts:95:45)
      at raise (/home/runner/workspace/node_modules/@babel/parser/src/tokenizer/index.ts:1497:19)
      at unexpected (/home/runner/workspace/node_modules/@babel/parser/src/tokenizer/index.ts:1537:16)
      at jsxParseIdentifier (/home/runner/workspace/node_modules/@babel/parser/src/plugins/jsx/index.ts:278:14)
      at jsxParseNamespacedName (/home/runner/workspace/node_modules/@babel/parser/src/plugins/jsx/index.ts:288:25)
      at jsxParseElementName (/home/runner/workspace/node_modules/@babel/parser/src/plugins/jsx/index.ts:306:14)
      at jsxParseOpeningElementAt (/home/runner/workspace/node_modules/@babel/parser/src/plugins/jsx/index.ts:429:24)
      at jsxParseElementAt (/home/runner/workspace/node_modules/@babel/parser/src/plugins/jsx/index.ts:470:35)
      at jsxParseElement (/home/runner/workspace/node_modules/@babel/parser/src/plugins/jsx/index.ts:559:19)
      at parseExprAtom (/home/runner/workspace/node_modules/@babel/parser/src/plugins/jsx/index.ts:573:21)
      at parseExprSubscripts (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:714:23)
      at parseUpdate (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:693:21)
      at parseMaybeUnary (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:655:23)
      at parseMaybeUnary (/home/runner/workspace/node_modules/@babel/parser/src/plugins/typescript/index.ts:3735:20)
      at parseMaybeUnaryOrPrivate (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:389:14)
      at parseExprOps (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:401:23)
      at parseMaybeConditional (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:356:23)
      at parseMaybeAssign (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:298:21)
      at fn (/home/runner/workspace/node_modules/@babel/parser/src/plugins/typescript/index.ts:3588:23)
      at tryParse (/home/runner/workspace/node_modules/@babel/parser/src/parser/util.ts:174:20)
      at parseMaybeAssign (/home/runner/workspace/node_modules/@babel/parser/src/plugins/typescript/index.ts:3587:20)
      at parseExpressionBase (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:221:23)
      at callback (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:212:39)
      at allowInAnd (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:3112:16)
      at parseExpression (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:212:17)
      at parseStatementContent (/home/runner/workspace/node_modules/@babel/parser/src/parser/statement.ts:659:23)
      at parseStatementContent (/home/runner/workspace/node_modules/@babel/parser/src/plugins/typescript/index.ts:3056:20)
      at parseStatementLike (/home/runner/workspace/node_modules/@babel/parser/src/parser/statement.ts:437:17)
      at parseStatementListItem (/home/runner/workspace/node_modules/@babel/parser/src/parser/statement.ts:386:17)
      at parseSwitchStatement (/home/runner/workspace/node_modules/@babel/parser/src/parser/statement.ts:1135:36)
      at parseStatementContent (/home/runner/workspace/node_modules/@babel/parser/src/parser/statement.ts:500:21)
      at parseStatementContent (/home/runner/workspace/node_modules/@babel/parser/src/plugins/typescript/index.ts:3056:20)
      at parseStatementLike (/home/runner/workspace/node_modules/@babel/parser/src/parser/statement.ts:437:17)
      at parseStatementListItem (/home/runner/workspace/node_modules/@babel/parser/src/parser/statement.ts:386:17)
      at parseBlockOrModuleBlockBody (/home/runner/workspace/node_modules/@babel/parser/src/parser/statement.ts:1420:16)
      at parseBlockBody (/home/runner/workspace/node_modules/@babel/parser/src/parser/statement.ts:1393:10)
      at parseBlock (/home/runner/workspace/node_modules/@babel/parser/src/parser/statement.ts:1361:10)
      at parseFunctionBody (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:2557:24)
      at parseArrowExpression (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:2498:10)
      at parseParenAndDistinguishExpression (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:1794:12)
      at parseExprAtom (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:1131:21)
      at parseExprAtom (/home/runner/workspace/node_modules/@babel/parser/src/plugins/jsx/index.ts:583:22)
      at parseExprSubscripts (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:714:23)
      at parseUpdate (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:693:21)
      at parseMaybeUnary (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:655:23)
      at parseMaybeUnary (/home/runner/workspace/node_modules/@babel/parser/src/plugins/typescript/index.ts:3735:20)
      at parseMaybeUnaryOrPrivate (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:389:14)
      at parseExprOps (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:401:23)
      at parseMaybeConditional (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:356:23)
      at parseMaybeAssign (/home/runner/workspace/node_modules/@babel/parser/src/parser/expression.ts:298:21)
