currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/first/first_PART1.ts]
namespace ts {
    /* @internal */
    /**
     * Subset of properties from SourceFile that are used in multiple utility functions
     */
    export interface SourceFileLike {
        readonly text: string;
        lineMap?: ReadonlyArray<number>;
        /* @internal */
        getPositionOfLineAndCharacter?(line: number, character: number, allowEdits?: true): number;
    }

    /* @internal */
    export interface RedirectInfo {
        /** Source file this redirects to. */
        readonly redirectTarget: SourceFile;
        /**
         * Source file for the duplicate package. This will not be used by the Program,
         * but we need to keep this around so we can watch for changes in underlying.
         */
        readonly unredirected: SourceFile;
    }

    // Source files are declarations when they are external modules.
    export interface SourceFile {
        someProp: string;
    }
}interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);


//// [/src/first/first_part2.ts]
console.log(f());


//// [/src/first/first_part3.ts]
function f() {
    return "JS does hoists";
}


//// [/src/first/tsconfig.json]
{
  "compilerOptions": {
    "target": "es5",
    "composite": true,
    "removeComments": true,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "outFile": "./bin/first-output.js",
    "skipDefaultLibCheck": true
  },
  "files": [
    "first_PART1.ts",
    "first_part2.ts",
    "first_part3.ts"
  ],
  "references": []
}

//// [/src/second/second_part1.ts]
namespace N {
    // Comment text
}

namespace N {
    function f() {
        console.log('testing');
    }

    f();
}


//// [/src/second/second_part2.ts]
class C {
    doSomething() {
        console.log("something got done");
    }
}


//// [/src/second/tsconfig.json]
{
  "compilerOptions": {
    "ignoreDeprecations": "5.0",
    "target": "es5",
    "composite": true,
    "removeComments": true,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
    "outFile": "../2/second-output.js",
    "skipDefaultLibCheck": true
  },
  "references": []
}

//// [/src/third/third_part1.ts]
var c = new C();
c.doSomething();


//// [/src/third/tsconfig.json]
{
  "compilerOptions": {
    "ignoreDeprecations": "5.0",
    "target": "es5",
    "composite": true,
    "removeComments": true,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
    "stripInternal": true,
    "outFile": "./thirdjs/output/third-output.js",
    "skipDefaultLibCheck": true
  },
  "files": [
    "third_part1.ts"
  ],
  "references": [
    {
      "path": "../first",
      "prepend": true
    },
    {
      "path": "../second",
      "prepend": true
    }
  ]
}



Output::
/lib/tsc --b /src/third --verbose
[[90m12:00:20 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:00:21 AM[0m] Project 'src/first/tsconfig.json' is out of date because output file 'src/first/bin/first-output.tsbuildinfo' does not exist

[[90m12:00:22 AM[0m] Building project '/src/first/tsconfig.json'...

[[90m12:00:32 AM[0m] Project 'src/second/tsconfig.json' is out of date because output file 'src/2/second-output.tsbuildinfo' does not exist

[[90m12:00:33 AM[0m] Building project '/src/second/tsconfig.json'...

[[90m12:00:43 AM[0m] Project 'src/third/tsconfig.json' is out of date because output file 'src/third/thirdjs/output/third-output.tsbuildinfo' does not exist

[[90m12:00:44 AM[0m] Building project '/src/third/tsconfig.json'...

[96msrc/third/tsconfig.json[0m:[93m19[0m:[93m5[0m - [91merror[0m[90m TS5102: [0mOption 'prepend' has been removed. Please remove it from your configuration.

[7m19[0m     {
[7m  [0m [91m    ~[0m
[7m20[0m       "path": "../first",
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m21[0m       "prepend": true
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~[0m
[7m22[0m     },
[7m  [0m [91m~~~~~[0m

[96msrc/third/tsconfig.json[0m:[93m23[0m:[93m5[0m - [91merror[0m[90m TS5102: [0mOption 'prepend' has been removed. Please remove it from your configuration.

[7m23[0m     {
[7m  [0m [91m    ~[0m
[7m24[0m       "path": "../second",
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m25[0m       "prepend": true
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~[0m
[7m26[0m     }
[7m  [0m [91m~~~~~[0m


Found 2 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/2/second-output.d.ts]
declare namespace N {
}
declare namespace N {
}
declare class C {
    doSomething(): void;
}
//# sourceMappingURL=second-output.d.ts.map

//// [/src/2/second-output.d.ts.map]
{"version":3,"file":"second-output.d.ts","sourceRoot":"","sources":["../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":"AAAA,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd"}

//// [/src/2/second-output.d.ts.map.baseline.txt]
===================================================================
JsFile: second-output.d.ts
mapUrl: second-output.d.ts.map
sourceRoot: 
sources: ../second/second_part1.ts,../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/2/second-output.d.ts
sourceFile:../second/second_part1.ts
-------------------------------------------------------------------
>>>declare namespace N {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1 >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 19) Source(1, 11) + SourceIndex(0)
3 >Emitted(1, 20) Source(1, 12) + SourceIndex(0)
4 >Emitted(1, 21) Source(1, 13) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(2, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare namespace N {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1->
  >
  >
2 >namespace 
3 >                  N
4 >                    
1->Emitted(3, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(3, 19) Source(5, 11) + SourceIndex(0)
3 >Emitted(3, 20) Source(5, 12) + SourceIndex(0)
4 >Emitted(3, 21) Source(5, 13) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^->
1 >{
  >    function f() {
  >        console.log('testing');
  >    }
  >
  >    f();
  >}
1 >Emitted(4, 2) Source(11, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.d.ts
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>declare class C {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^->
1->
2 >class 
3 >              C
1->Emitted(5, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(5, 15) Source(1, 7) + SourceIndex(1)
3 >Emitted(5, 16) Source(1, 8) + SourceIndex(1)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(6, 5) Source(2, 5) + SourceIndex(1)
2 >Emitted(6, 16) Source(2, 16) + SourceIndex(1)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(7, 2) Source(5, 2) + SourceIndex(1)
---
>>>//# sourceMappingURL=second-output.d.ts.map

//// [/src/2/second-output.js]
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
//# sourceMappingURL=second-output.js.map

//// [/src/2/second-output.js.map]
{"version":3,"file":"second-output.js","sourceRoot":"","sources":["../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":"AAIA,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC"}

//// [/src/2/second-output.js.map.baseline.txt]
===================================================================
JsFile: second-output.js
mapUrl: second-output.js.map
sourceRoot: 
sources: ../second/second_part1.ts,../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part1.ts
-------------------------------------------------------------------
>>>var N;
1 >
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^->
1 >namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1 >Emitted(1, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(5, 11) + SourceIndex(0)
3 >Emitted(1, 6) Source(5, 12) + SourceIndex(0)
4 >Emitted(1, 7) Source(11, 2) + SourceIndex(0)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(2, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(2, 12) Source(5, 11) + SourceIndex(0)
3 >Emitted(2, 13) Source(5, 12) + SourceIndex(0)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(3, 5) Source(6, 5) + SourceIndex(0)
2 >Emitted(3, 14) Source(6, 14) + SourceIndex(0)
3 >Emitted(3, 15) Source(6, 15) + SourceIndex(0)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(4, 9) Source(7, 9) + SourceIndex(0)
2 >Emitted(4, 16) Source(7, 16) + SourceIndex(0)
3 >Emitted(4, 17) Source(7, 17) + SourceIndex(0)
4 >Emitted(4, 20) Source(7, 20) + SourceIndex(0)
5 >Emitted(4, 21) Source(7, 21) + SourceIndex(0)
6 >Emitted(4, 30) Source(7, 30) + SourceIndex(0)
7 >Emitted(4, 31) Source(7, 31) + SourceIndex(0)
8 >Emitted(4, 32) Source(7, 32) + SourceIndex(0)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^->
1 >
  >    
2 >    }
1 >Emitted(5, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(5, 6) Source(8, 6) + SourceIndex(0)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(6, 5) Source(10, 5) + SourceIndex(0)
2 >Emitted(6, 6) Source(10, 6) + SourceIndex(0)
3 >Emitted(6, 8) Source(10, 8) + SourceIndex(0)
4 >Emitted(6, 9) Source(10, 9) + SourceIndex(0)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(7, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(7, 2) Source(11, 2) + SourceIndex(0)
3 >Emitted(7, 4) Source(5, 11) + SourceIndex(0)
4 >Emitted(7, 5) Source(5, 12) + SourceIndex(0)
5 >Emitted(7, 10) Source(5, 11) + SourceIndex(0)
6 >Emitted(7, 11) Source(5, 12) + SourceIndex(0)
7 >Emitted(7, 19) Source(11, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^->
1->
1->Emitted(8, 1) Source(1, 1) + SourceIndex(1)
---
>>>    function C() {
1->^^^^
2 >    ^->
1->
1->Emitted(9, 5) Source(1, 1) + SourceIndex(1)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(10, 5) Source(5, 1) + SourceIndex(1)
2 >Emitted(10, 6) Source(5, 2) + SourceIndex(1)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(11, 5) Source(2, 5) + SourceIndex(1)
2 >Emitted(11, 28) Source(2, 16) + SourceIndex(1)
3 >Emitted(11, 31) Source(2, 5) + SourceIndex(1)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(12, 9) Source(3, 9) + SourceIndex(1)
2 >Emitted(12, 16) Source(3, 16) + SourceIndex(1)
3 >Emitted(12, 17) Source(3, 17) + SourceIndex(1)
4 >Emitted(12, 20) Source(3, 20) + SourceIndex(1)
5 >Emitted(12, 21) Source(3, 21) + SourceIndex(1)
6 >Emitted(12, 41) Source(3, 41) + SourceIndex(1)
7 >Emitted(12, 42) Source(3, 42) + SourceIndex(1)
8 >Emitted(12, 43) Source(3, 43) + SourceIndex(1)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(13, 5) Source(4, 5) + SourceIndex(1)
2 >Emitted(13, 6) Source(4, 6) + SourceIndex(1)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(14, 5) Source(5, 1) + SourceIndex(1)
2 >Emitted(14, 13) Source(5, 2) + SourceIndex(1)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(15, 1) Source(5, 1) + SourceIndex(1)
2 >Emitted(15, 2) Source(5, 2) + SourceIndex(1)
3 >Emitted(15, 2) Source(1, 1) + SourceIndex(1)
4 >Emitted(15, 6) Source(5, 2) + SourceIndex(1)
---
>>>//# sourceMappingURL=second-output.js.map

//// [/src/2/second-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"../second","sourceFiles":["../second/second_part1.ts","../second/second_part2.ts"],"js":{"sections":[{"pos":0,"end":270,"kind":"text"}],"mapHash":"9890117190-{\"version\":3,\"file\":\"second-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AAIA,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC\"}","hash":"-2912899787-var N;\n(function (N) {\n    function f() {\n        console.log('testing');\n    }\n    f();\n})(N || (N = {}));\nvar C = (function () {\n    function C() {\n    }\n    C.prototype.doSomething = function () {\n        console.log(\"something got done\");\n    };\n    return C;\n}());\n//# sourceMappingURL=second-output.js.map"},"dts":{"sections":[{"pos":0,"end":93,"kind":"text"}],"mapHash":"7640041563-{\"version\":3,\"file\":\"second-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AAAA,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd\"}","hash":"-16005591226-declare namespace N {\n}\ndeclare namespace N {\n}\ndeclare class C {\n    doSomething(): void;\n}\n//# sourceMappingURL=second-output.d.ts.map"}},"program":{"fileNames":["../../lib/lib.d.ts","../second/second_part1.ts","../second/second_part2.ts"],"fileInfos":["3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","-12195290447-namespace N {\n    // Comment text\n}\n\nnamespace N {\n    function f() {\n        console.log('testing');\n    }\n\n    f();\n}\n","3642692259-class C {\n    doSomething() {\n        console.log(\"something got done\");\n    }\n}\n"],"root":[2,3],"options":{"composite":true,"declaration":true,"declarationMap":true,"outFile":"./second-output.js","removeComments":true,"skipDefaultLibCheck":true,"sourceMap":true,"strict":false,"target":1},"outSignature":"-2513601205-declare namespace N {\n}\ndeclare namespace N {\n}\ndeclare class C {\n    doSomething(): void;\n}\n","latestChangedDtsFile":"./second-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/2/second-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/2/second-output.js
----------------------------------------------------------------------
text: (0-270)
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());

======================================================================
======================================================================
File:: /src/2/second-output.d.ts
----------------------------------------------------------------------
text: (0-93)
declare namespace N {
}
declare namespace N {
}
declare class C {
    doSomething(): void;
}

======================================================================

//// [/src/2/second-output.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "../second",
    "sourceFiles": [
      "../second/second_part1.ts",
      "../second/second_part2.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 270,
          "kind": "text"
        }
      ],
      "hash": "-2912899787-var N;\n(function (N) {\n    function f() {\n        console.log('testing');\n    }\n    f();\n})(N || (N = {}));\nvar C = (function () {\n    function C() {\n    }\n    C.prototype.doSomething = function () {\n        console.log(\"something got done\");\n    };\n    return C;\n}());\n//# sourceMappingURL=second-output.js.map",
      "mapHash": "9890117190-{\"version\":3,\"file\":\"second-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AAIA,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 93,
          "kind": "text"
        }
      ],
      "hash": "-16005591226-declare namespace N {\n}\ndeclare namespace N {\n}\ndeclare class C {\n    doSomething(): void;\n}\n//# sourceMappingURL=second-output.d.ts.map",
      "mapHash": "7640041563-{\"version\":3,\"file\":\"second-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AAAA,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACVD,cAAM,CAAC;IACH,WAAW;CAGd\"}"
    }
  },
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../second/second_part1.ts",
      "../second/second_part2.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "../second/second_part1.ts": "-12195290447-namespace N {\n    // Comment text\n}\n\nnamespace N {\n    function f() {\n        console.log('testing');\n    }\n\n    f();\n}\n",
      "../second/second_part2.ts": "3642692259-class C {\n    doSomething() {\n        console.log(\"something got done\");\n    }\n}\n"
    },
    "root": [
      [
        2,
        "../second/second_part1.ts"
      ],
      [
        3,
        "../second/second_part2.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "declarationMap": true,
      "outFile": "./second-output.js",
      "removeComments": true,
      "skipDefaultLibCheck": true,
      "sourceMap": true,
      "strict": false,
      "target": 1
    },
    "outSignature": "-2513601205-declare namespace N {\n}\ndeclare namespace N {\n}\ndeclare class C {\n    doSomething(): void;\n}\n",
    "latestChangedDtsFile": "./second-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2704
}

//// [/src/first/bin/first-output.d.ts]
declare namespace ts {
    interface SourceFileLike {
        readonly text: string;
        lineMap?: ReadonlyArray<number>;
        getPositionOfLineAndCharacter?(line: number, character: number, allowEdits?: true): number;
    }
    interface RedirectInfo {
        readonly redirectTarget: SourceFile;
        readonly unredirected: SourceFile;
    }
    interface SourceFile {
        someProp: string;
    }
}
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;
//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.d.ts.map]
{"version":3,"file":"first-output.d.ts","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAAA,kBAAU,EAAE,CAAC;IAKT,UAAiB,cAAc;QAC3B,QAAQ,CAAC,IAAI,EAAE,MAAM,CAAC;QACtB,OAAO,CAAC,EAAE,aAAa,CAAC,MAAM,CAAC,CAAC;QAEhC,6BAA6B,CAAC,CAAC,IAAI,EAAE,MAAM,EAAE,SAAS,EAAE,MAAM,EAAE,UAAU,CAAC,EAAE,IAAI,GAAG,MAAM,CAAC;KAC9F;IAGD,UAAiB,YAAY;QAEzB,QAAQ,CAAC,cAAc,EAAE,UAAU,CAAC;QAKpC,QAAQ,CAAC,YAAY,EAAE,UAAU,CAAC;KACrC;IAGD,UAAiB,UAAU;QACvB,QAAQ,EAAE,MAAM,CAAC;KACpB;CACJ;AAAA,UAAU,QAAQ;IACf,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AEnCD,iBAAS,CAAC,WAET"}

//// [/src/first/bin/first-output.d.ts.map.baseline.txt]
===================================================================
JsFile: first-output.d.ts
mapUrl: first-output.d.ts.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>declare namespace ts {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^^
4 >                    ^
5 >                     ^^^^^^^^^->
1 >
2 >namespace 
3 >                  ts
4 >                     
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 19) Source(1, 11) + SourceIndex(0)
3 >Emitted(1, 21) Source(1, 13) + SourceIndex(0)
4 >Emitted(1, 22) Source(1, 14) + SourceIndex(0)
---
>>>    interface SourceFileLike {
1->^^^^
2 >    ^^^^^^^^^^
3 >              ^^^^^^^^^^^^^^
4 >                            ^^->
1->{
  >    /* @internal */
  >    /**
  >     * Subset of properties from SourceFile that are used in multiple utility functions
  >     */
  >    
2 >    export interface 
3 >              SourceFileLike
1->Emitted(2, 5) Source(6, 5) + SourceIndex(0)
2 >Emitted(2, 15) Source(6, 22) + SourceIndex(0)
3 >Emitted(2, 29) Source(6, 36) + SourceIndex(0)
---
>>>        readonly text: string;
1->^^^^^^^^
2 >        ^^^^^^^^
3 >                ^
4 >                 ^^^^
5 >                     ^^
6 >                       ^^^^^^
7 >                             ^
8 >                              ^^^^^^^^^^->
1-> {
  >        
2 >        readonly
3 >                 
4 >                 text
5 >                     : 
6 >                       string
7 >                             ;
1->Emitted(3, 9) Source(7, 9) + SourceIndex(0)
2 >Emitted(3, 17) Source(7, 17) + SourceIndex(0)
3 >Emitted(3, 18) Source(7, 18) + SourceIndex(0)
4 >Emitted(3, 22) Source(7, 22) + SourceIndex(0)
5 >Emitted(3, 24) Source(7, 24) + SourceIndex(0)
6 >Emitted(3, 30) Source(7, 30) + SourceIndex(0)
7 >Emitted(3, 31) Source(7, 31) + SourceIndex(0)
---
>>>        lineMap?: ReadonlyArray<number>;
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^
5 >                  ^^^^^^^^^^^^^
6 >                               ^
7 >                                ^^^^^^
8 >                                      ^
9 >                                       ^
10>                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >        
2 >        lineMap
3 >               ?
4 >                : 
5 >                  ReadonlyArray
6 >                               <
7 >                                number
8 >                                      >
9 >                                       ;
1->Emitted(4, 9) Source(8, 9) + SourceIndex(0)
2 >Emitted(4, 16) Source(8, 16) + SourceIndex(0)
3 >Emitted(4, 17) Source(8, 17) + SourceIndex(0)
4 >Emitted(4, 19) Source(8, 19) + SourceIndex(0)
5 >Emitted(4, 32) Source(8, 32) + SourceIndex(0)
6 >Emitted(4, 33) Source(8, 33) + SourceIndex(0)
7 >Emitted(4, 39) Source(8, 39) + SourceIndex(0)
8 >Emitted(4, 40) Source(8, 40) + SourceIndex(0)
9 >Emitted(4, 41) Source(8, 41) + SourceIndex(0)
---
>>>        getPositionOfLineAndCharacter?(line: number, character: number, allowEdits?: true): number;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                     ^
4 >                                      ^
5 >                                       ^^^^
6 >                                           ^^
7 >                                             ^^^^^^
8 >                                                   ^^
9 >                                                     ^^^^^^^^^
10>                                                              ^^
11>                                                                ^^^^^^
12>                                                                      ^^
13>                                                                        ^^^^^^^^^^
14>                                                                                  ^
15>                                                                                   ^^
16>                                                                                     ^^^^
17>                                                                                         ^^^
18>                                                                                            ^^^^^^
19>                                                                                                  ^
1->
  >        /* @internal */
  >        
2 >        getPositionOfLineAndCharacter
3 >                                     ?
4 >                                      (
5 >                                       line
6 >                                           : 
7 >                                             number
8 >                                                   , 
9 >                                                     character
10>                                                              : 
11>                                                                number
12>                                                                      , 
13>                                                                        allowEdits
14>                                                                                  ?
15>                                                                                   : 
16>                                                                                     true
17>                                                                                         ): 
18>                                                                                            number
19>                                                                                                  ;
1->Emitted(5, 9) Source(10, 9) + SourceIndex(0)
2 >Emitted(5, 38) Source(10, 38) + SourceIndex(0)
3 >Emitted(5, 39) Source(10, 39) + SourceIndex(0)
4 >Emitted(5, 40) Source(10, 40) + SourceIndex(0)
5 >Emitted(5, 44) Source(10, 44) + SourceIndex(0)
6 >Emitted(5, 46) Source(10, 46) + SourceIndex(0)
7 >Emitted(5, 52) Source(10, 52) + SourceIndex(0)
8 >Emitted(5, 54) Source(10, 54) + SourceIndex(0)
9 >Emitted(5, 63) Source(10, 63) + SourceIndex(0)
10>Emitted(5, 65) Source(10, 65) + SourceIndex(0)
11>Emitted(5, 71) Source(10, 71) + SourceIndex(0)
12>Emitted(5, 73) Source(10, 73) + SourceIndex(0)
13>Emitted(5, 83) Source(10, 83) + SourceIndex(0)
14>Emitted(5, 84) Source(10, 84) + SourceIndex(0)
15>Emitted(5, 86) Source(10, 86) + SourceIndex(0)
16>Emitted(5, 90) Source(10, 90) + SourceIndex(0)
17>Emitted(5, 93) Source(10, 93) + SourceIndex(0)
18>Emitted(5, 99) Source(10, 99) + SourceIndex(0)
19>Emitted(5, 100) Source(10, 100) + SourceIndex(0)
---
>>>    }
1 >^^^^^
2 >     ^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >    }
1 >Emitted(6, 6) Source(11, 6) + SourceIndex(0)
---
>>>    interface RedirectInfo {
1->^^^^
2 >    ^^^^^^^^^^
3 >              ^^^^^^^^^^^^
4 >                          ^^^^^^^^^^^^^^^^^^->
1->
  >
  >    /* @internal */
  >    
2 >    export interface 
3 >              RedirectInfo
1->Emitted(7, 5) Source(14, 5) + SourceIndex(0)
2 >Emitted(7, 15) Source(14, 22) + SourceIndex(0)
3 >Emitted(7, 27) Source(14, 34) + SourceIndex(0)
---
>>>        readonly redirectTarget: SourceFile;
1->^^^^^^^^
2 >        ^^^^^^^^
3 >                ^
4 >                 ^^^^^^^^^^^^^^
5 >                               ^^
6 >                                 ^^^^^^^^^^
7 >                                           ^
1-> {
  >        /** Source file this redirects to. */
  >        
2 >        readonly
3 >                 
4 >                 redirectTarget
5 >                               : 
6 >                                 SourceFile
7 >                                           ;
1->Emitted(8, 9) Source(16, 9) + SourceIndex(0)
2 >Emitted(8, 17) Source(16, 17) + SourceIndex(0)
3 >Emitted(8, 18) Source(16, 18) + SourceIndex(0)
4 >Emitted(8, 32) Source(16, 32) + SourceIndex(0)
5 >Emitted(8, 34) Source(16, 34) + SourceIndex(0)
6 >Emitted(8, 44) Source(16, 44) + SourceIndex(0)
7 >Emitted(8, 45) Source(16, 45) + SourceIndex(0)
---
>>>        readonly unredirected: SourceFile;
1 >^^^^^^^^
2 >        ^^^^^^^^
3 >                ^
4 >                 ^^^^^^^^^^^^
5 >                             ^^
6 >                               ^^^^^^^^^^
7 >                                         ^
1 >
  >        /**
  >         * Source file for the duplicate package. This will not be used by the Program,
  >         * but we need to keep this around so we can watch for changes in underlying.
  >         */
  >        
2 >        readonly
3 >                 
4 >                 unredirected
5 >                             : 
6 >                               SourceFile
7 >                                         ;
1 >Emitted(9, 9) Source(21, 9) + SourceIndex(0)
2 >Emitted(9, 17) Source(21, 17) + SourceIndex(0)
3 >Emitted(9, 18) Source(21, 18) + SourceIndex(0)
4 >Emitted(9, 30) Source(21, 30) + SourceIndex(0)
5 >Emitted(9, 32) Source(21, 32) + SourceIndex(0)
6 >Emitted(9, 42) Source(21, 42) + SourceIndex(0)
7 >Emitted(9, 43) Source(21, 43) + SourceIndex(0)
---
>>>    }
1 >^^^^^
2 >     ^^^^^^^^^^^^^^^^^^^^^->
1 >
  >    }
1 >Emitted(10, 6) Source(22, 6) + SourceIndex(0)
---
>>>    interface SourceFile {
1->^^^^
2 >    ^^^^^^^^^^
3 >              ^^^^^^^^^^
4 >                        ^->
1->
  >
  >    // Source files are declarations when they are external modules.
  >    
2 >    export interface 
3 >              SourceFile
1->Emitted(11, 5) Source(25, 5) + SourceIndex(0)
2 >Emitted(11, 15) Source(25, 22) + SourceIndex(0)
3 >Emitted(11, 25) Source(25, 32) + SourceIndex(0)
---
>>>        someProp: string;
1->^^^^^^^^
2 >        ^^^^^^^^
3 >                ^^
4 >                  ^^^^^^
5 >                        ^
1-> {
  >        
2 >        someProp
3 >                : 
4 >                  string
5 >                        ;
1->Emitted(12, 9) Source(26, 9) + SourceIndex(0)
2 >Emitted(12, 17) Source(26, 17) + SourceIndex(0)
3 >Emitted(12, 19) Source(26, 19) + SourceIndex(0)
4 >Emitted(12, 25) Source(26, 25) + SourceIndex(0)
5 >Emitted(12, 26) Source(26, 26) + SourceIndex(0)
---
>>>    }
1 >^^^^^
1 >
  >    }
1 >Emitted(13, 6) Source(27, 6) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(14, 2) Source(28, 2) + SourceIndex(0)
---
>>>interface TheFirst {
1->
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1->
2 >interface 
3 >          TheFirst
1->Emitted(15, 1) Source(28, 2) + SourceIndex(0)
2 >Emitted(15, 11) Source(28, 12) + SourceIndex(0)
3 >Emitted(15, 19) Source(28, 20) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(16, 5) Source(29, 5) + SourceIndex(0)
2 >Emitted(16, 9) Source(29, 9) + SourceIndex(0)
3 >Emitted(16, 11) Source(29, 11) + SourceIndex(0)
4 >Emitted(16, 14) Source(29, 14) + SourceIndex(0)
5 >Emitted(16, 15) Source(29, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(17, 2) Source(30, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(18, 1) Source(32, 1) + SourceIndex(0)
2 >Emitted(18, 9) Source(32, 1) + SourceIndex(0)
3 >Emitted(18, 15) Source(32, 7) + SourceIndex(0)
4 >Emitted(18, 16) Source(32, 8) + SourceIndex(0)
5 >Emitted(18, 33) Source(32, 25) + SourceIndex(0)
6 >Emitted(18, 34) Source(32, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(19, 1) Source(34, 1) + SourceIndex(0)
2 >Emitted(19, 11) Source(34, 11) + SourceIndex(0)
3 >Emitted(19, 28) Source(34, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(20, 5) Source(35, 5) + SourceIndex(0)
2 >Emitted(20, 9) Source(35, 9) + SourceIndex(0)
3 >Emitted(20, 11) Source(35, 11) + SourceIndex(0)
4 >Emitted(20, 14) Source(35, 14) + SourceIndex(0)
5 >Emitted(20, 15) Source(35, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(21, 2) Source(36, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
5 >                             ^^^^^^^^^^^^->
1->
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1->Emitted(22, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(22, 18) Source(1, 10) + SourceIndex(2)
3 >Emitted(22, 19) Source(1, 11) + SourceIndex(2)
4 >Emitted(22, 30) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.js]
var s = "Hello, world";
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AA+BA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACrCf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >namespace ts {
  >    /* @internal */
  >    /**
  >     * Subset of properties from SourceFile that are used in multiple utility functions
  >     */
  >    export interface SourceFileLike {
  >        readonly text: string;
  >        lineMap?: ReadonlyArray<number>;
  >        /* @internal */
  >        getPositionOfLineAndCharacter?(line: number, character: number, allowEdits?: true): number;
  >    }
  >
  >    /* @internal */
  >    export interface RedirectInfo {
  >        /** Source file this redirects to. */
  >        readonly redirectTarget: SourceFile;
  >        /**
  >         * Source file for the duplicate package. This will not be used by the Program,
  >         * but we need to keep this around so we can watch for changes in underlying.
  >         */
  >        readonly unredirected: SourceFile;
  >    }
  >
  >    // Source files are declarations when they are external modules.
  >    export interface SourceFile {
  >        someProp: string;
  >    }
  >}interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(1, 1) Source(32, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(32, 7) + SourceIndex(0)
3 >Emitted(1, 6) Source(32, 8) + SourceIndex(0)
4 >Emitted(1, 9) Source(32, 11) + SourceIndex(0)
5 >Emitted(1, 23) Source(32, 25) + SourceIndex(0)
6 >Emitted(1, 24) Source(32, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(2, 1) Source(38, 1) + SourceIndex(0)
2 >Emitted(2, 8) Source(38, 8) + SourceIndex(0)
3 >Emitted(2, 9) Source(38, 9) + SourceIndex(0)
4 >Emitted(2, 12) Source(38, 12) + SourceIndex(0)
5 >Emitted(2, 13) Source(38, 13) + SourceIndex(0)
6 >Emitted(2, 14) Source(38, 14) + SourceIndex(0)
7 >Emitted(2, 15) Source(38, 15) + SourceIndex(0)
8 >Emitted(2, 16) Source(38, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(3, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(3, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(3, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(3, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(3, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(3, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(3, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(3, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(3, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(4, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(4, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(4, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(5, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(5, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(5, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(5, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(6, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(6, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"..","sourceFiles":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"js":{"sections":[{"pos":0,"end":104,"kind":"text"}],"mapHash":"-27619420124-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AA+BA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACrCf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}","hash":"4999315210-var s = \"Hello, world\";\nconsole.log(s);\nconsole.log(f());\nfunction f() {\n    return \"JS does hoists\";\n}\n//# sourceMappingURL=first-output.js.map"},"dts":{"sections":[{"pos":0,"end":23,"kind":"text"},{"pos":23,"end":354,"kind":"internal"},{"pos":355,"end":565,"kind":"text"}],"mapHash":"62640600936-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAA,kBAAU,EAAE,CAAC;IAKT,UAAiB,cAAc;QAC3B,QAAQ,CAAC,IAAI,EAAE,MAAM,CAAC;QACtB,OAAO,CAAC,EAAE,aAAa,CAAC,MAAM,CAAC,CAAC;QAEhC,6BAA6B,CAAC,CAAC,IAAI,EAAE,MAAM,EAAE,SAAS,EAAE,MAAM,EAAE,UAAU,CAAC,EAAE,IAAI,GAAG,MAAM,CAAC;KAC9F;IAGD,UAAiB,YAAY;QAEzB,QAAQ,CAAC,cAAc,EAAE,UAAU,CAAC;QAKpC,QAAQ,CAAC,YAAY,EAAE,UAAU,CAAC;KACrC;IAGD,UAAiB,UAAU;QACvB,QAAQ,EAAE,MAAM,CAAC;KACpB;CACJ;AAAA,UAAU,QAAQ;IACf,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AEnCD,iBAAS,CAAC,WAET\"}","hash":"-30794078285-declare namespace ts {\n    interface SourceFileLike {\n        readonly text: string;\n        lineMap?: ReadonlyArray<number>;\n        getPositionOfLineAndCharacter?(line: number, character: number, allowEdits?: true): number;\n    }\n    interface RedirectInfo {\n        readonly redirectTarget: SourceFile;\n        readonly unredirected: SourceFile;\n    }\n    interface SourceFile {\n        someProp: string;\n    }\n}\ninterface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n//# sourceMappingURL=first-output.d.ts.map"}},"program":{"fileNames":["../../../lib/lib.d.ts","../first_part1.ts","../first_part2.ts","../first_part3.ts"],"fileInfos":["3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","-85636319423-namespace ts {\n    /* @internal */\n    /**\n     * Subset of properties from SourceFile that are used in multiple utility functions\n     */\n    export interface SourceFileLike {\n        readonly text: string;\n        lineMap?: ReadonlyArray<number>;\n        /* @internal */\n        getPositionOfLineAndCharacter?(line: number, character: number, allowEdits?: true): number;\n    }\n\n    /* @internal */\n    export interface RedirectInfo {\n        /** Source file this redirects to. */\n        readonly redirectTarget: SourceFile;\n        /**\n         * Source file for the duplicate package. This will not be used by the Program,\n         * but we need to keep this around so we can watch for changes in underlying.\n         */\n        readonly unredirected: SourceFile;\n    }\n\n    // Source files are declarations when they are external modules.\n    export interface SourceFile {\n        someProp: string;\n    }\n}interface TheFirst {\n    none: any;\n}\n\nconst s = \"Hello, world\";\n\ninterface NoJsForHereEither {\n    none: any;\n}\n\nconsole.log(s);\n","6007494133-console.log(f());\n","4357625305-function f() {\n    return \"JS does hoists\";\n}\n"],"root":[[2,4]],"options":{"composite":true,"declarationMap":true,"outFile":"./first-output.js","removeComments":true,"skipDefaultLibCheck":true,"sourceMap":true,"strict":false,"target":1},"outSignature":"-22356627540-declare namespace ts {\n    interface SourceFileLike {\n        readonly text: string;\n        lineMap?: ReadonlyArray<number>;\n        getPositionOfLineAndCharacter?(line: number, character: number, allowEdits?: true): number;\n    }\n    interface RedirectInfo {\n        readonly redirectTarget: SourceFile;\n        readonly unredirected: SourceFile;\n    }\n    interface SourceFile {\n        someProp: string;\n    }\n}\ninterface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n","latestChangedDtsFile":"./first-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/first/bin/first-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
text: (0-104)
var s = "Hello, world";
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
text: (0-23)
declare namespace ts {

----------------------------------------------------------------------
internal: (23-354)
    interface SourceFileLike {
        readonly text: string;
        lineMap?: ReadonlyArray<number>;
        getPositionOfLineAndCharacter?(line: number, character: number, allowEdits?: true): number;
    }
    interface RedirectInfo {
        readonly redirectTarget: SourceFile;
        readonly unredirected: SourceFile;
    }
----------------------------------------------------------------------
text: (355-565)
    interface SourceFile {
        someProp: string;
    }
}
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

======================================================================

//// [/src/first/bin/first-output.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "..",
    "sourceFiles": [
      "../first_PART1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 104,
          "kind": "text"
        }
      ],
      "hash": "4999315210-var s = \"Hello, world\";\nconsole.log(s);\nconsole.log(f());\nfunction f() {\n    return \"JS does hoists\";\n}\n//# sourceMappingURL=first-output.js.map",
      "mapHash": "-27619420124-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AA+BA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACrCf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 23,
          "kind": "text"
        },
        {
          "pos": 23,
          "end": 354,
          "kind": "internal"
        },
        {
          "pos": 355,
          "end": 565,
          "kind": "text"
        }
      ],
      "hash": "-30794078285-declare namespace ts {\n    interface SourceFileLike {\n        readonly text: string;\n        lineMap?: ReadonlyArray<number>;\n        getPositionOfLineAndCharacter?(line: number, character: number, allowEdits?: true): number;\n    }\n    interface RedirectInfo {\n        readonly redirectTarget: SourceFile;\n        readonly unredirected: SourceFile;\n    }\n    interface SourceFile {\n        someProp: string;\n    }\n}\ninterface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n//# sourceMappingURL=first-output.d.ts.map",
      "mapHash": "62640600936-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAA,kBAAU,EAAE,CAAC;IAKT,UAAiB,cAAc;QAC3B,QAAQ,CAAC,IAAI,EAAE,MAAM,CAAC;QACtB,OAAO,CAAC,EAAE,aAAa,CAAC,MAAM,CAAC,CAAC;QAEhC,6BAA6B,CAAC,CAAC,IAAI,EAAE,MAAM,EAAE,SAAS,EAAE,MAAM,EAAE,UAAU,CAAC,EAAE,IAAI,GAAG,MAAM,CAAC;KAC9F;IAGD,UAAiB,YAAY;QAEzB,QAAQ,CAAC,cAAc,EAAE,UAAU,CAAC;QAKpC,QAAQ,CAAC,YAAY,EAAE,UAAU,CAAC;KACrC;IAGD,UAAiB,UAAU;QACvB,QAAQ,EAAE,MAAM,CAAC;KACpB;CACJ;AAAA,UAAU,QAAQ;IACf,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AEnCD,iBAAS,CAAC,WAET\"}"
    }
  },
  "program": {
    "fileNames": [
      "../../../lib/lib.d.ts",
      "../first_part1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "fileInfos": {
      "../../../lib/lib.d.ts": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "../first_part1.ts": "-85636319423-namespace ts {\n    /* @internal */\n    /**\n     * Subset of properties from SourceFile that are used in multiple utility functions\n     */\n    export interface SourceFileLike {\n        readonly text: string;\n        lineMap?: ReadonlyArray<number>;\n        /* @internal */\n        getPositionOfLineAndCharacter?(line: number, character: number, allowEdits?: true): number;\n    }\n\n    /* @internal */\n    export interface RedirectInfo {\n        /** Source file this redirects to. */\n        readonly redirectTarget: SourceFile;\n        /**\n         * Source file for the duplicate package. This will not be used by the Program,\n         * but we need to keep this around so we can watch for changes in underlying.\n         */\n        readonly unredirected: SourceFile;\n    }\n\n    // Source files are declarations when they are external modules.\n    export interface SourceFile {\n        someProp: string;\n    }\n}interface TheFirst {\n    none: any;\n}\n\nconst s = \"Hello, world\";\n\ninterface NoJsForHereEither {\n    none: any;\n}\n\nconsole.log(s);\n",
      "../first_part2.ts": "6007494133-console.log(f());\n",
      "../first_part3.ts": "4357625305-function f() {\n    return \"JS does hoists\";\n}\n"
    },
    "root": [
      [
        [
          2,
          4
        ],
        [
          "../first_part1.ts",
          "../first_part2.ts",
          "../first_part3.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "declarationMap": true,
      "outFile": "./first-output.js",
      "removeComments": true,
      "skipDefaultLibCheck": true,
      "sourceMap": true,
      "strict": false,
      "target": 1
    },
    "outSignature": "-22356627540-declare namespace ts {\n    interface SourceFileLike {\n        readonly text: string;\n        lineMap?: ReadonlyArray<number>;\n        getPositionOfLineAndCharacter?(line: number, character: number, allowEdits?: true): number;\n    }\n    interface RedirectInfo {\n        readonly redirectTarget: SourceFile;\n        readonly unredirected: SourceFile;\n    }\n    interface SourceFile {\n        someProp: string;\n    }\n}\ninterface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n",
    "latestChangedDtsFile": "./first-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 4854
}

