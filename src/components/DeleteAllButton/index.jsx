export const DeleteAllButton = ({ deleteList }) => {
  return (
    <div className="d-flex justify-content-center">
      <button
        type="submit"
        onClick={deleteList}
        className="btn btn-danger mt-3"
      >
        Удалить все
      </button>
    </div>
  )
}
