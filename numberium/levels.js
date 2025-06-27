const levels = [
	{},
	{
		level: 1,
		numRows: 4,
		numCols: 4,
		startRow: 3,
		startCol: 1,
		endRow: 0,
		endCol: 0,
		startVal: 1,
		endVal: 17,
		operations: [
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
		],
		values: [
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[3, 1, 1, 1],
			[1, 1, 1, 1],
		]
	},
	{
		level: 2,
		numRows: 4,
		numCols: 4,
		startRow: 3,
		startCol: 3,
		endRow: 3,
		endCol: 0,
		startVal: 1,
		endVal: 19,
		operations: [
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
		],
		values: [
			[1, 1, 1, 1],
			[1, 1, 1, 6],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
		]
	},
	{
		level: 3,
		numRows: 4,
		numCols: 4,
		startRow: 1,
		startCol: 2,
		endRow: 3,
		endCol: 0,
		startVal: 1,
		endVal: 8,
		operations: [
			["-", "+", "+", "+"],
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
		],
		values: [
			[6, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
		]
	},
	{
		level: 4,
		numRows: 4,
		numCols: 4,
		startRow: 3,
		startCol: 0,
		endRow: 2,
		endCol: 2,
		startVal: 1,
		endVal: 51,
		operations: [
			["+", "+", "+", "x"],
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
		],
		values: [
			[1, 1, 1, 6],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
		]
	},
	{
		level: 5,
		numRows: 4,
		numCols: 4,
		startRow: 0,
		startCol: 1,
		endRow: 1,
		endCol: 1,
		startVal: 1,
		endVal: 12,
		operations: [
			["+", "+", "+", "x"],
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
		],
		values: [
			[1, 1, 1, 9],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[2, 1, 1, 1],
		]
	},
	{
		level: 6,
		numRows: 4,
		numCols: 4,
		startRow: 2,
		startCol: 2,
		endRow: 1,
		endCol: 1,
		startVal: 1,
		endVal: 76,
		operations: [
			["x", "+", "+", "+"],
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
		],
		values: [
			[8, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 2],
		]
	},
	{
		level: 7,
		numRows: 4,
		numCols: 4,
		startRow: 3,
		startCol: 0,
		endRow: 3,
		endCol: 1,
		startVal: 1,
		endVal: 12,
		operations: [
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
			["+", "+", "-", "+"],
			["+", "+", "+", "+"],
		],
		values: [
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 8, 4, 1],
			[1, 1, 1, 1],
		]
	},
	{
		level: 8,
		numRows: 4,
		numCols: 4,
		startRow: 0,
		startCol: 0,
		endRow: 0,
		endCol: 3,
		startVal: 1,
		endVal: 55,
		operations: [
			["+", "+", "+", "+"],
			["+", "+", "+", "x"],
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
		],
		values: [
			[1, 1, 5, 1],
			[1, 1, 1, 6],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
		]
	},
	{
		level: 9,
		numRows: 4,
		numCols: 4,
		startRow: 0,
		startCol: 1,
		endRow: 1,
		endCol: 1,
		startVal: 1,
		endVal: 6,
		operations: [
			["+", "+", "x", "+"],
			["+", "+", "+", "+"],
			["+", "-", "+", "+"],
			["+", "+", "+", "+"],
		],
		values: [
			[1, 1, 3, 1],
			[1, 1, 1, 1],
			[1, 5, 1, 1],
			[1, 1, 1, 1],
		]
	},
	{
		level: 10,
		numRows: 4,
		numCols: 4,
		startRow: 2,
		startCol: 2,
		endRow: 2,
		endCol: 1,
		startVal: 1,
		endVal: 52,
		operations: [
			["+", "+", "x", "+"],
			["+", "+", "+", "+"],
			["+", "+", "+", "+"],
			["+", "-", "+", "+"],
		],
		values: [
			[1, 1, 8, 8],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 4, 1, 1],
		]

	},
	{
		level: 21,
		numRows: 5,
		numCols: 5,
		startRow: 0,
		startCol: 0,
		endRow: 0,
		endCol: 1,
		startVal: 1,
		endVal: 21,
		operations: [
			{
				row: 3,
				col: 2,
				op: "+",
				val: 6,
			},
			{
				row: 3,
				col: 4,
				op: "x",
				val: 2,
			},
			{
				row: 4,
				col: 4,
				op: "+",
				val: 3,
			},
		]
	},
	{
		level: 41,
		numRows: 4,
		numCols: 4,
		startRow: 0,
		startCol: 1,
		endRow: 3,
		endCol: 1,
		startVal: 1,
		endVal: 2,
		operations: [
			{
				row: 1,
				col: 1,
				op: "+",
				val: 5,
			},
			{
				row: 1,
				col: 3,
				op: "x",
				val: 3,
			},
			{
				row: 2,
				col: 0,
				op: "/",
				val: 3,
			},
			{
				row: 2,
				col: 3,
				op: "-",
				val: 3,
			},
			{
				row: 3,
				col: 2,
				op: "%",
				val: 5,
			},
			{
				row: 3,
				col: 3,
				op: "^",
				val: 2,
			},
		]
	},
]

















