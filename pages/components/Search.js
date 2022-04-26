export default function Search() {
    return(
        <div className="col-12 col-md-8 p-1">
        <div className="card p-3 shadow-sm">
          <h3 className="p-0 my-3 ">ค้นหาเอกสาร</h3>
          <div className="form-group">
            <input type="text" className="form-control" />
            <br />
            <div className="row m-0">
              <div className="col-8 p-1 mx-auto ">
                <div className="btn btn-success w-100">
                  <h4 className="text-center m-0">ค้นหาข้อมูลภายใน</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}
