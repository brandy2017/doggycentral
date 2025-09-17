// Imports go at the top of the file!
// Syntax for importing: import NameOfImport from "whereTheExportIsComingFrom"
import Card from "@/components/Card";
import Dog from "@/components/Dog";

// A React component is a function that returns JSX/HTML

// The process we follow when creating React components:
/**
 * 1. Create your component
 * 2. Export your component
 * 3. Import your component
 * 4. Use your component
 */

// React components are ALWAYS capitalized! and they have the .jsx extension

// To call a react component that you have imported we use the following syntax: <NameOfImportedComponent />
export default function Home() {
  return (
    <div>
      <Card />
      <Dog />
    </div>
  );
}
