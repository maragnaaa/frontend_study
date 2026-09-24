interface contentData {
  text: string;
  className: string;
}

interface headerContentData {
  text: string;
  className: string;
}

export type headerData = headerContentData[];

export type rowData = contentData[];

interface RowsProps {
  rowsContent: rowData[];
  rowsClass: string[];
}

interface HeaderRowProp {
  headerRowContent: headerData[];
  headerClass: string;
}

interface TableProps {
  tableClass: string;
  tableHeaderClass: string;
  headerRowContent: headerData[];
  rowsContent: rowData[];
  rowsClass: string[];
}

export function Table({
  tableClass,
  tableHeaderClass,
  headerRowContent,
  rowsContent,
  rowsClass,
}: TableProps) {
  return (
    <div className={tableClass}>
      <HeaderRow headerRowContent={headerRowContent} headerClass={tableHeaderClass} />
      <TableRows rowsContent={rowsContent} rowsClass={rowsClass} />
    </div>
  );
}

function TableRows({ rowsContent, rowsClass }: RowsProps) {
  return (
    <>
      {rowsContent.map((contentRow, indexRow) => (
        <div key={indexRow} className={rowsClass?.[indexRow]}>
          {contentRow.map((content, index) => (
            <div key={index} className={content.className}>
              <p>{content.text}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

function HeaderRow({ headerRowContent, headerClass }: HeaderRowProp) {
  return (
    <>
      {headerRowContent.map((contentHeader, index) => (
        <div key={index} className={headerClass}>
          {contentHeader.map((headerText, index) => (
            <p key={index} className={headerText.className}>
              {headerText.text}
            </p>
          ))}
        </div>
      ))}
    </>
  );
}
