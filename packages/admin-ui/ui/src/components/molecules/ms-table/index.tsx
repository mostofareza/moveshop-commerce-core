import Actionables, { ActionType } from "../actionables"
import FilteringOptions, { FilteringOptionProps } from "./filtering-option"

import React from "react"
import SortingIcon from "../../fundamentals/icons/sorting-icon"
import TableSearch from "./table-search"
import clsx from "clsx"
import { useNavigate } from "react-router-dom"

type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  forceDropdown?: boolean
  actions?: ActionType[]
  linkTo?: string
  clickable?: boolean
}

type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  linkTo?: string
  name?: string
}

type SortingHeadCellProps = {
  onSortClicked: () => void
  sortDirection?: "ASC" | "DESC"
  setSortDirection: (string) => void
} & React.HTMLAttributes<HTMLTableCellElement>

export type TableProps = {
  filteringOptions?: FilteringOptionProps[] | React.ReactNode
  tableActions?: React.ReactNode
  enableSearch?: boolean
  searchClassName?: string
  immediateSearchFocus?: boolean
  searchPlaceholder?: string
  searchValue?: string
  tableHeight?: string
  containerClassName?: string
  handleSearch?: (searchTerm: string) => void
} & React.HTMLAttributes<HTMLTableElement>

type TableElement<T> = React.ForwardRefExoticComponent<T> &
  React.RefAttributes<unknown>

type TableType = {
  Head: TableElement<React.HTMLAttributes<HTMLTableSectionElement>>
  HeadRow: TableElement<React.HTMLAttributes<HTMLTableRowElement>>
  HeadCell: TableElement<React.ThHTMLAttributes<HTMLTableCellElement>>
  SortingHeadCell: TableElement<SortingHeadCellProps>
  Body: TableElement<React.HTMLAttributes<HTMLTableSectionElement>>
  Row: TableElement<TableRowProps>
  Cell: TableElement<TableCellProps>
} & TableElement<TableProps>

const MsTable = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      className,
      children,
      tableActions,
      enableSearch,
      searchClassName,
      immediateSearchFocus,
      searchPlaceholder,
      searchValue,
      handleSearch,
      filteringOptions,
      containerClassName,
      tableHeight,
      ...props
    },
    ref
  ) => {
    if (enableSearch && !handleSearch) {
      throw new Error("Table cannot enable search without a search handler")
    }

    return (
      <div className={`flex flex-col ${containerClassName}`}>
        <div className="relative my-3 flex w-full justify-between px-4">
          {filteringOptions && (
            <div className="mb-2 flex self-end">
              {Array.isArray(filteringOptions)
                ? filteringOptions.map((fo, idx) => (
                    <FilteringOptions {...fo} key={idx} />
                  ))
                : filteringOptions}
            </div>
          )}
          <div className="gap-x-xsmall flex w-full place-content-end">
            {tableActions && <div>{tableActions}</div>}
            {enableSearch && (
              <TableSearch
                autoFocus={immediateSearchFocus}
                placeholder={searchPlaceholder}
                searchValue={searchValue}
                onSearch={handleSearch!}
                className={`${searchClassName}`}
              />
            )}
          </div>
        </div>
        <div className={clsx("relative", tableHeight)}>
          <table
            ref={ref}
            className={clsx("w-full table-auto", className)}
            {...props}
          >
            {children}
          </table>
        </div>
      </div>
    )
  }
) as TableType

MsTable.Head = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, children, ...props }, ref) => (
  <thead
    ref={ref}
    className={clsx(
      "inter-small-semibold text-grey-50 border-grey-20 whitespace-nowrap border-b border-t",
      className
    )}
    {...props}
  >
    {children}
  </thead>
))

MsTable.HeadRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, children, ...props }, ref) => (
  <tr ref={ref} className={clsx(className)} {...props}>
    {children}
  </tr>
))

MsTable.HeadCell = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, children, ...props }, ref) => (
  <th ref={ref} className={clsx("h-[40px] text-left", className)} {...props}>
    {children}
  </th>
))

MsTable.SortingHeadCell = React.forwardRef<
  HTMLTableCellElement,
  SortingHeadCellProps
>(
  (
    {
      onSortClicked,
      sortDirection,
      setSortDirection,
      className,
      children,
      ...props
    }: SortingHeadCellProps,
    ref
  ) => {
    return (
      <th ref={ref} className={clsx("py-2.5 text-left", className)} {...props}>
        <div
          className="flex cursor-pointer select-none items-center"
          onClick={(e) => {
            e.preventDefault()
            if (!sortDirection) {
              setSortDirection("ASC")
            } else {
              if (sortDirection === "ASC") {
                setSortDirection("DESC")
              } else {
                setSortDirection(undefined)
              }
            }
            onSortClicked()
          }}
        >
          {children}
          <SortingIcon
            size={16}
            ascendingColor={sortDirection === "ASC" ? "#111827" : undefined}
            descendingColor={sortDirection === "DESC" ? "#111827" : undefined}
          />
        </div>
      </th>
    )
  }
)

MsTable.Body = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, children, ...props }, ref) => (
  <tbody ref={ref} className={clsx(className)} {...props}>
    {children}
  </tbody>
))

MsTable.Cell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, linkTo, children, ...props }, ref) => {
    const navigate = useNavigate()
    return (
      <td
        ref={ref}
        className={clsx("inter-small-regular h-[40px]", className)}
        {...props}
        {...(linkTo && {
          onClick: (e) => {
            navigate(linkTo)
            e.stopPropagation()
          },
        })}
      >
        {children}
      </td>
    )
  }
)

MsTable.Row = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  (
    {
      className,
      actions,
      children,
      linkTo,
      forceDropdown,
      clickable,
      ...props
    },
    ref
  ) => {
    const navigate = useNavigate()
    return (
      <tr
        ref={ref}
        className={clsx(
          "inter-small-regular border-grey-20 text-grey-90 h-[64px] border-b border-t",
          className,
          {
            "hover:bg-grey-5 cursor-pointer": linkTo !== undefined || clickable,
          }
        )}
        {...props}
        {...(linkTo && {
          onClick: () => {
            navigate(linkTo)
          },
        })}
      >
        {children}
        {actions && (
          <MsTable.Cell
            onClick={(e) => e.stopPropagation()}
            className="w-[32px]"
          >
            <Actionables forceDropdown={forceDropdown} actions={actions} />
          </MsTable.Cell>
        )}
      </tr>
    )
  }
)

export default MsTable
