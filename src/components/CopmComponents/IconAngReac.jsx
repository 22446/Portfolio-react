/* eslint-disable react/prop-types */
export default function IconAngReac({kind,color,icon}) {
  return (
    <p className={`position-absolute d-flex align-items-center gap-2 z-3 bottom-0 btn btn-${color} p-1 m-1 disabled fw-medium`}>{kind}<i className={`fa-brands fa-${icon} fw-normal fs-5`} /></p>

  )
}
