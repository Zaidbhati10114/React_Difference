import React, { useState } from "react";
import "./ReactDifference.css";

const ReactDifference = () => {
  const [listA, setListA] = useState("");
  const [listB, setListB] = useState("");
  const [results, setResults] = useState(null);

  const findDifferences = () => {
    const arrA = listA.split("\n").map((item) => item.trim());
    const arrB = listB.split("\n").map((item) => item.trim());

    const itemsOnlyInA = arrA.filter((item) => !arrB.includes(item));
    const itemsOnlyInB = arrB.filter((item) => !arrA.includes(item));
    const itemsInBoth = arrA.filter((item) => arrB.includes(item));
    const combinedItems = [...new Set([...arrA, ...arrB])];

    const differences = {
      itemsOnlyInA,
      itemsOnlyInB,
      itemsInBoth,
      combinedItems
    };

    setResults(differences);
  };

  return (
    <div>
      <div>
        <h2>List A</h2>
        <textarea
          value={listA}
          onChange={(e) => setListA(e.target.value)}
          rows={2}
          cols={50}
        />
      </div>
      <div>
        <h2>List B</h2>
        <textarea
          value={listB}
          onChange={(e) => setListB(e.target.value)}
          rows={2}
          cols={50}
        />
      </div>
      <div>
        <div className="p-2">
          <button
            className="btn btn-success btn-lg p-2"
            onClick={findDifferences}
          >
            Compute
          </button>
        </div>
      </div>
      {results && (
        // First Result
        <div>
          <h2 className="text-center  p-2">Results</h2>
          <h3>Items present only in A:</h3>
          <ul className="list-group list-results p-1">
            {results.itemsOnlyInA.map((item) => (
              <li key={item} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>

          {/* Second Result */}
          <h3>Items present only in B:</h3>
          <ul className="list-group list-results p-1">
            {results.itemsOnlyInB.map((item) => (
              <li key={item} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>

          {/* Third Result */}

          <h3>Items present in Both A & B:</h3>
          <ul className="list-group list-results p-1">
            {results.itemsInBoth.map((item) => (
              <li key={item} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>

          {/* Fourth Result */}
          <h3>Combined unique items from A and B:</h3>
          <ul className="list-group list-results p-1">
            {results.combinedItems.map((item) => (
              <li key={item} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReactDifference;
