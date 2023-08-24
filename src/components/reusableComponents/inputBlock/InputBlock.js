import "../inputBlock/InputBlock.css";

const InputBlock = () => {
  return (
    <div className="inputBlock container my-2">
      <div className="text-center mb-4">
        <h5>
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
      </div>
      <form className="d-flex justify-content-center gap-3">
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control form-control-lg w-100"
            placeholder="Email address"
            required
          />
        </div>
        <button className="btn btn-primary btn-lg mb-2 btn-danger">
          Get Started <i className="bi bi-chevron-right"></i>
        </button>
      </form>
    </div>
  );
};

export default InputBlock;
