using EnterpriseWeb.Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EnterpriseWeb.Controllers
{
    public class AdminController : Controller
    {
        EntityDB entity = new EntityDB();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult NavList()
        {
            return View();
        }
        public ActionResult NavList_Get()
        {
            var query = entity.nav.OrderBy(p => p.sort);
            //System.Threading.Thread.Sleep(3000);

            return Json(query, JsonRequestBehavior.AllowGet);
        }
    }
}