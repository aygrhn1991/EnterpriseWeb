namespace EnterpriseWeb.Models.DB
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class EntityDB : DbContext
    {
        public EntityDB()
            : base("name=EntityDB")
        {
        }

        public virtual DbSet<nav> nav { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
